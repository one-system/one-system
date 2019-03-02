export class ExceptionDotNet {
    // #region Constructors

    // #endregion

    // #region Properties

    // .NET Exception (the following fields are transmitted over the wire)
    ClassName: string | void;
    Data: { key: number, value: string }[] | null;
    ExceptionMethod: string | void;
    HelpURL: string | null | void;
    HelpLink: string | null | void;
    HResult: number;
    InnerException: ExceptionDotNet | null;
    Message: string | null;
    RemoteStackIndex: number | void;
    RemoteStackTraceString: string | null | void;
    Source: string;
    StackTrace: string;
    WatsonBuckets: string | null | void;

    /**
     *  @deprecated ExceptionMessage is obsolete
     */
    ExceptionMessage: string | void;
    /**
     *  @deprecated ExceptionType is obsolete
     */
    ExceptionType: string | void;

    // #endregion

    // #region Public Methods

    // #endregion

    // #region Private Methods

    // #endregion
}
