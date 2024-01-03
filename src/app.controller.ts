import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import * as path from 'path';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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

  @Get('download')
  async downloadPdf(@Res() res: Response): Promise<void> {
    const pdfPath = path.resolve(__dirname, '../public/test.pdf');

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=test.pdf');

    res.sendFile(pdfPath);
  }
}
