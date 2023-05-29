import { Injectable } from '@nestjs/common';
import * as XLSX from 'xlsx';

@Injectable()
export class ApiVersioningService {
  async get() {
    return 1;
  }
  async getV2() {
    return 'Lorem ipsum';
  }
  async getV3() {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet([
      ['Cell A1', 'Cell B1'],
      ['Cell A2', 'Cell B2'],
    ]);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet 1');
    return XLSX.write(workbook, { type: 'buffer' });
  }
}
