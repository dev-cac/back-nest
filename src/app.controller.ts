import { Body, Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  async completeFirm(@Res() res, @Body() documentDto) {
    console.log(documentDto);

    return res.status(HttpStatus.OK).send({
      message: 'Success',
      status: 'success',
      code: HttpStatus.OK,
      data: documentDto,
    });
  }
}
