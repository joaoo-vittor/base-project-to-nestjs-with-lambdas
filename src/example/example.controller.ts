import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('example')
export class ExampleController {
  @Get(':name')
  getName(@Param('name') name: string, @Res() res: Response) {
    return res.status(200).json({message: 'Hello World', name: name});
  }
}
