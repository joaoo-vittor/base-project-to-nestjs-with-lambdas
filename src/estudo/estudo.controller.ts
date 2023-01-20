import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import {v4 as uuid} from 'uuid';
import moment from 'moment';
import { DynamoDB } from 'aws-sdk'; 

interface EstudoBody {
  name: string;
  description: string;
}


@Controller('estudo')
export class EstudoController {
  @Post()
  async createEstudo(@Body() body: EstudoBody, @Res() res: Response) {
    
    const dynamoDB = new DynamoDB({
      region: 'local',
      endpoint: 'http://localhost:7000/shell',
      apiVersion: '2023-01-09'
    });
    
    const data = {
      TableName: 'estudo',
      Item: {
        id : {S: uuid()},
        name : {S: body.name},
        description : {S: body.description},
        createdAt : {S: moment().format('DD-MM-YY hh:mm:ss')},
      }
    };

    try {
      await dynamoDB.putItem(data).promise();
      return res.status(200).json({
        id: data.Item.id.S,
        name: data.Item.name.S,
        description: data.Item.description.S,
        createdAt: data.Item.createdAt.S,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({message: 'Internal Error Server'});
    }
    
  }

  @Get()
  async getEstudo(@Res() res: Response) {
    const dynamoDB = new DynamoDB({
      region: 'local',
      endpoint: 'http://localhost:7000/shell',
      apiVersion: '2023-01-09'
    })

    let response = null;

    await dynamoDB.scan({ TableName: 'estudo' }, (err, data) => {
      if (data) {
        const auxData = data.Items.map((value) => {
          return {
            id: value.id.S,
            name: value.name.S,
            description: value.description.S,
            createdAt: value.createdAt.S,
          };
        });
        response = {
          estudo: auxData,
        };
      } else {
        return res.status(404).json({message: 'Data not found'});
      }
    }).promise();

    return res.status(200).json(response);
  }
}
