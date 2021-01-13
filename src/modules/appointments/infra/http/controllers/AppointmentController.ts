import { container } from 'tsyringe';
import CreateAppointmentService from '@modules/appointments/services/CreateAppointmetService';

import { Request, Response } from 'express';

export default class AppointmentController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { provider_id, date } = request.body;
    const user_id = request.user.id;

    const createAppointment = container.resolve(CreateAppointmentService);
    const appointment = await createAppointment.execute({
      provider_id,
      date,
      user_id,
    });

    return response.json(appointment);
  }
}
