import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  async completeFirm(@Res() res, @Body() documentDto) {
    console.log({
      method: 'GET',
      documentDto,
    });

    return res.status(HttpStatus.OK).send({
      message: 'Success',
      status: 'success',
      code: HttpStatus.OK,
      data: documentDto,
    });
  }

  @Post('')
  async completeFirmPost(@Res() res, @Body() documentDto) {
    console.log({
      method: 'POST',
      documentDto,
    });

    return res.status(HttpStatus.OK).send({
      message: 'Success',
      status: 'success',
      code: HttpStatus.OK,
      data: documentDto,
    });
  }
}
