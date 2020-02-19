import { Controller, Post, Get ,Body} from '@nestjs/common';
import {sendMail} from './sentMail'
@Controller('sentmail')
export class SendmailController {
    @Post()
    async sendMail(@Body() data :any):Promise<any>{
        await sendMail(data.email,data.body,data.name);
    }
}
