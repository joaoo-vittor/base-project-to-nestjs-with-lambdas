### Para instalar o DynamoDB em Memória

```
npx sls dynamodb install
```

### Para iniciar o DynamoDB em Memória

```
npx serverless dynamodb start
```

### Para usar o Dynamodb localmente

> adicione o plugin

```yaml
plugins:
  ...
  - serverless-dynamodb-local
```
> E adicione também as configurações do dynamo

```yaml
custom:
  dynamodb:
    stages:
      - dev
    start:
      docker: true
      port: 7000
      inMemory: true
```
