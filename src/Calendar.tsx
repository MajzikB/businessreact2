import React from 'react';
import { Inject, Schedule, ScheduleComponent, Day, WorkWeek, Month, Agenda, Resize, DragAndDrop, ResourcesDirective, ResourceDirective } from '@syncfusion/ej2-react-schedule';
import { loadCldr } from '@syncfusion/ej2-base';


loadCldr(
  require('./ca-gregorian.json'),
  require('./timeZoneNames.json'),
  require('./numbers.json'),
);

class Calendar extends React.Component {

  private weekstart: number = 1;  // Hétfővel kezdődjön a hét

  render() {
    return <ScheduleComponent timeFormat="HH:mm" dateFormat="yyyy. MM. dd" className="calendar" currentView='WorkWeek' locale='hu' firstDayOfWeek={this.weekstart}>
      <ResourcesDirective>
        <ResourceDirective field='ResourceID'></ResourceDirective>
      </ResourcesDirective>
      <Inject services={[Day, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
    </ScheduleComponent>

  }
}

export default Calendar;
