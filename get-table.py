import boto3
from botocore.config import Config

dynamodb = boto3.resource('dynamodb')

table = dynamodb.Table('Books')

res = table.scan(
    ProjectionExpression="Title, Author"
)

print(res['Items'])
