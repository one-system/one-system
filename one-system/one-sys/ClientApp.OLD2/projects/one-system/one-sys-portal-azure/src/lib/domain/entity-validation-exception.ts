import { ExceptionDotnet } from './exception-dotnet';
import { ValidationResultDotnet } from './validation-result-dotnet';

export class EntityValidationException extends ExceptionDotnet {
  Data: { key: number, value: string }[];
  ValidationResults: ValidationResultDotnet[];

  //public convertResponse(response: any) {
  //    if (response.headers === undefined) {
  //        console.debug('angularportalazure.EntityValidationException.convertResponse - response.data');
  //        ValidationsExceptionDotNet.convertResponse(this, response.data);
  //        ValidationsExceptionDotNet.convertExceptionType(this, response.data);
  //    } else {
  //        console.debug('angularportalazure.EntityValidationException.convertResponse - response.json()');
  //        ValidationsExceptionDotNet.convertResponse(this, response.json());
  //        ValidationsExceptionDotNet.convertExceptionType(this, response.json());
  //    }
  //}

  //protected static convertResponse(exceptionTo: EntityValidationException | ValidationsExceptionDotNet, responseDataFrom: ExceptionDotNet): void {
  //    console.debug('angularportalazure.EntityValidationException.convertResponse');

  //    exceptionTo.ExceptionMessage = responseDataFrom.ExceptionMessage;
  //    exceptionTo.Message = responseDataFrom.Message;
  //    exceptionTo.StackTrace = responseDataFrom.StackTrace;
  //    exceptionTo.InnerException = responseDataFrom.InnerException;
  //}

  //protected static convertExceptionType(exception: EntityValidationException | ValidationsExceptionDotNet, responseData: any): void {
  //    if (responseData.ExceptionType === undefined) {
  //        console.debug('angularportalazure.EntityValidationException.convertExceptionType - undefined');
  //        return;
  //    }
  //    else if (responseData.ExceptionType === 'System.Data.Entity.Validation.DbEntityValidationException') {
  //        console.debug('angularportalazure.EntityValidationException.convertExceptionType - DbEntityValidationException');
  //        exception.ExceptionType = 'DbEntityValidationException';
  //        return;
  //    }
  //    else if (responseData.ExceptionType === 'System.Data.Entity.Infrastructure.DbUpdateConcurrencyException') {
  //        console.debug('angularportalazure.EntityValidationException.convertExceptionType - DbUpdateConcurrencyException');
  //        exception.ExceptionType = 'DbUpdateConcurrencyException';
  //        return;
  //    }
  //    else if (responseData.ClassName !== undefined && responseData.ClassName.indexOf('ValidationsException') > 0) {
  //        console.debug('angularportalazure.EntityValidationException.convertExceptionType - ValidationsException');
  //        exception.ExceptionType = 'ValidationsException';
  //        return;
  //    }
  //    else {
  //        console.debug('angularportalazure.EntityValidationException.convertExceptionType - else');
  //        exception.ExceptionType = responseData.ExceptionType;
  //    }
  //}
}
