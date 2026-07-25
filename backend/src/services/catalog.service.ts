import { servicesData } from '../data/services.data';
import { packagesData } from '../data/packages.data';
import type { PackageDto, ServiceDto } from '../types';

/**
 * Service layer — จุดเดียวที่เข้าถึงข้อมูล
 * เปลี่ยนภายในฟังก์ชันเหล่านี้เป็น Database query ได้โดยไม่กระทบ controller
 */
export const catalogService = {
  async listServices(): Promise<ServiceDto[]> {
    return servicesData;
  },

  async listPackages(): Promise<PackageDto[]> {
    return packagesData;
  },
};
