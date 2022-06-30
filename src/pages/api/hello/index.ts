import {
    Context,
    APIGatewayProxyResult,
    Callback,
    Handler,
    APIGatewayEventDefaultAuthorizerContext,
    APIGatewayProxyEventBase,
} from 'aws-lambda';

/**
 * @example <caption>HTTP Request with Callback</caption>
 * import { Handler } from 'aws-lambda'
 * import https from 'https'
 *
 * let url = "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"
 *
 * export const handler: Handler<void, number> = (event, context, callback) => {
 *  https.get(url, (res) => {
 *    callback(null, res.statusCode)
 *  }).on('error', (e) => {
 *    callback(Error(e))
 *  })
 * }
 *
 * @param event
 *      Parsed JSON data in the lambda request payload. For an AWS service triggered
 *      lambda this should be in the format of a type ending in Event, for example the
 *      S3Handler receives an event of type S3Event.
 * @param context
 *      Runtime contextual information of the current invocation, for example the caller
 *      identity, available memory and time remaining, legacy completion callbacks, and
 *      a mutable property controlling when the lambda execution completes.
 * @param callback
 *      NodeJS-style completion callback that the AWS Lambda runtime will provide that can
 *      be used to provide the lambda result payload value, or any execution error. Can
 *      instead return a promise that resolves with the result payload value or rejects
 *      with the execution error.
 * @return
 *      A promise that resolves with the lambda result payload value, or rejects with the
 *      execution error. Note that if you implement your handler as an async function,
 *      you will automatically return a promise that will resolve with a returned value,
 *      or reject with a thrown value.
 */

const lambdaHandler: Handler<
    APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>,
    APIGatewayProxyResult
> = async (
    event: APIGatewayProxyEventBase<APIGatewayEventDefaultAuthorizerContext>,
    context: Context,
    callback: Callback<APIGatewayProxyResult>,
): Promise<APIGatewayProxyResult> => {
    const body = JSON.parse(event?.body || '{}');
    console.log('EVENT:', body);
    console.log('CONTEXT:', context.getRemainingTimeInMillis());
    console.log('CALLBACK:', callback);
    // const error = new LambdaError('MUITO LOKO', 'LOKO');
    // callback(error);
    // callback(undefined, {
    //     statusCode: 200,
    //     body: JSON.stringify({
    //         message: 'hello mf',
    //     }),
    // } as APIGatewayProxyResult);
    let response: APIGatewayProxyResult;
    try {
        response = {
            statusCode: 200,
            body: JSON.stringify({
                message: 'hello world',
            }),
        };
    } catch (err) {
        console.log(err);
        response = {
            statusCode: 500,
            body: JSON.stringify({
                message: 'some error happened',
            }),
        };
    }

    return response;
};

export { lambdaHandler };
