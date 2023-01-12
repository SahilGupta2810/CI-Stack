import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-sqs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CiStackStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


    // example resource
    const queue = new sqs.Queue(this, 'CiStackQueue', {
      queueName: "CI-Queue",
      visibilityTimeout: cdk.Duration.seconds(300)
    });
  }
}
