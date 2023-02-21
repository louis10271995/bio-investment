import PermissionChecker from '../../services/user/permissionChecker';
import ApiResponseHandler from '../apiResponseHandler';
import Permissions from '../../security/permissions';
import DashboardService from '../../services/dashboardService';

export default async (req, res, next) => {
  try {
    new PermissionChecker(req).validateHas(
      Permissions.values.customerRead,
    );

    const payload = await new DashboardService(
      req,
    ).countTotalCustomer();

    await ApiResponseHandler.success(req, res, payload);
  } catch (error) {
    console.log(error);
    await ApiResponseHandler.error(req, res, error);
  }
};
