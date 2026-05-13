export class ExceptionDotNet {
    // #region Properties

    // .NET Exception (the following fields are transmitted over the wire)
    ClassName: string = '';
    Data: { key: number, value: string; }[] = [];
    ExceptionMethod: string = '';
    HelpURL: string = '';
    HelpLink: string = '';
    HResult: number = 0;
    InnerException: ExceptionDotNet = new ExceptionDotNet();
    Message: string = '';
    RemoteStackIndex: number = 0;
    RemoteStackTraceString: string = '';
    Source: string = '';
    StackTrace: string = '';
    WatsonBuckets: string = '';

    /**
     *  @deprecated ExceptionMessage is obsolete
     */
    ExceptionMessage: string = '';
    /**
     *  @deprecated ExceptionType is obsolete
     */
    ExceptionType: string = '';

    // #endregion

    // #region Constructors

    // #endregion

    // #region Public Methods

    // #endregion

    // #region Private Methods

    // #endregion
}
