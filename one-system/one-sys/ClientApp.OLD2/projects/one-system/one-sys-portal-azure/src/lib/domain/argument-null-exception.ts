import { ExceptionDotnet } from './exception-dotnet';

export class ArgumentNullException extends ExceptionDotnet {
  ParamName: string;
}
