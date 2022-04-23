/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-var-requires */
import debug from 'debug'
const log = debug('bot:firebase-bot.service')

import { Injectable } from '@nestjs/common'
import { Bot, Context } from 'grammy'
import { InjectBot } from '@grammyjs/nestjs'
import { FirebaseBotName } from './bot.constants'

// import { FirestoreUtils } from '../common/FirestoreUtils'

@Injectable()
export class FirebaseBotService {
  constructor(
    @InjectBot(FirebaseBotName)
    private readonly bot: Bot<Context>,
  ) {
    //
  }

  botInfo(): void {
    log(`FirebaseBotService!`, this.bot.botInfo.first_name)
  }
}
