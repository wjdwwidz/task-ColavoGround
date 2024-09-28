import { DayTimetableRequest } from './get-daytimetable.dto';

describe('DayTimetableRequest', () => {
  it('should be defined', () => {
    const request: DayTimetableRequest = {
      start_day_identifier: '20210910',
      days: 3,
      service_duration: 1800,
      timeslot_interval: 1800,
      timezone_identifier: 'Asia/Seoul',
    };
    expect(request.days).toEqual(3);
  });
});
