import { ValidationResult } from './validation-result';
import { ExceptionDotNet } from './exception-dotnet';

export class ExceptionDotNetEntityValidations extends ExceptionDotNet {
    // #region Properties

    Data: { key: number, value: string }[];
    ValidationResults: ValidationResult[];

    // #endregion

    // #region Constructors

    // #endregion

    // #region Public Methods

    //public convertResponse(response: any) {
    //    if (response.headers === undefined) {
    //        console.debug('EntityValidationException.convertResponse - response.data');
    //        ValidationsExceptionDotNet.convertResponse(this, response.data);
    //        ValidationsExceptionDotNet.convertExceptionType(this, response.data);
    //    } else {
    //        console.debug('EntityValidationException.convertResponse - response.json()');
    //        ValidationsExceptionDotNet.convertResponse(this, response.json());
    //        ValidationsExceptionDotNet.convertExceptionType(this, response.json());
    //    }
    //}

    // #endregion

    // #region Private Methods

    //protected static convertResponse(exceptionTo: EntityValidationException | ValidationsExceptionDotNet, responseDataFrom: ExceptionDotNet): void {
    //    console.debug('EntityValidationException.convertResponse');

    //    exceptionTo.ExceptionMessage = responseDataFrom.ExceptionMessage;
    //    exceptionTo.Message = responseDataFrom.Message;
    //    exceptionTo.StackTrace = responseDataFrom.StackTrace;
    //    exceptionTo.InnerException = responseDataFrom.InnerException;
    //}

    //protected static convertExceptionType(exception: EntityValidationException | ValidationsExceptionDotNet, responseData: any): void {
    //    if (responseData.ExceptionType === undefined) {
    //        console.debug('EntityValidationException.convertExceptionType - undefined');
    //        return;
    //    }
    //    else if (responseData.ExceptionType === 'System.Data.Entity.Validation.DbEntityValidationException') {
    //        console.debug('EntityValidationException.convertExceptionType - DbEntityValidationException');
    //        exception.ExceptionType = 'DbEntityValidationException';
    //        return;
    //    }
    //    else if (responseData.ExceptionType === 'System.Data.Entity.Infrastructure.DbUpdateConcurrencyException') {
    //        console.debug('EntityValidationException.convertExceptionType - DbUpdateConcurrencyException');
    //        exception.ExceptionType = 'DbUpdateConcurrencyException';
    //        return;
    //    }
    //    else if (responseData.ClassName !== undefined && responseData.ClassName.indexOf('ValidationsException') > 0) {
    //        console.debug('EntityValidationException.convertExceptionType - ValidationsException');
    //        exception.ExceptionType = 'ValidationsException';
    //        return;
    //    }
    //    else {
    //        console.debug('EntityValidationException.convertExceptionType - else');
    //        exception.ExceptionType = responseData.ExceptionType;
    //    }
    //}

    // #endregion
}
