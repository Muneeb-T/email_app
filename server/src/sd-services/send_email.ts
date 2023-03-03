let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import { EmailOutService } from '../utils/ndefault-email/EmailOut/EmailOutService'; //_splitter_
//append_imports_end
export class send_email {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'send_email';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new send_email(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_send_email_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: send_email');

    //appendnew_flow_send_email_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: send_email');

    this.app['post'](
      `${this.serviceBasePath}/send-email`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sendEmail(bh, parentSpanInst);
          //appendnew_next_sd_fNYxxQF6t2S9QQv3
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_fNYxxQF6t2S9QQv3');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          await this.sd_HTtAhX5ohKdWfnHe(bh, parentSpanInst);
          //appendnew_next_sd_ULuZc8k435fVOjx0
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ULuZc8k435fVOjx0');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_send_email_HttpIn
  }
  //   service flows_send_email

  //appendnew_flow_send_email_start

  async sendEmail(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan('sendEmail', parentSpanInst);
    try {
      let mailConfigObj = this.sdService.getConfigObj(
        'emailout-config',
        'sd_29PC2F1eHQwItcjq'
      );
      let server = mailConfigObj.server;
      let port = mailConfigObj.port;
      let secure = mailConfigObj.secure;
      let tls = mailConfigObj.tls;
      let userid = mailConfigObj.userid;
      let password = mailConfigObj.password;
      let emailServiceInstance = EmailOutService.getInstance();
      bh.local.response = await emailServiceInstance.sendEmail(
        {
          server,
          port,
          secure,
          tls,
        },
        {
          userid,
          password,
          to: 'vidograph77@gmail.com',
          subject: 'Sample email',
          body: bh.input.body.message,
          cc: undefined,
          bcc: undefined,
          from: undefined,
          html: undefined,
          iCal: undefined,
          routingOptions: undefined,
          contentOptions: undefined,
          securityOptions: undefined,
          headerOptions: undefined,
          attachments: undefined,
        }
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sendResponse(bh, parentSpanInst);
      //appendnew_next_sendEmail
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BTaBvPWSDqcOTsTV',
        spanInst,
        'sendEmail'
      );
    }
  }

  async sendResponse(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VNI8oMMY8YuYJJqd');
    }
  }

  async sendErrorResponse(bh, parentSpanInst) {
    try {
      bh.web.res.status(500).send(bh.error);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2YcPTz9ZZMFy1gsP');
    }
  }

  async sd_HTtAhX5ohKdWfnHe(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send('hello');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HTtAhX5ohKdWfnHe');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src, parentSpanInst?, functionName?) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (
      false ||
      (await this.catchError(bh, parentSpanInst))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async catchError(bh, parentSpanInst) {
    const catchConnectedNodes = ['sd_2YcPTz9ZZMFy1gsP'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    await this.sendErrorResponse(bh, parentSpanInst);
    //appendnew_next_catchError
    return true;
  }
  //appendnew_flow_send_email_Catch
}
