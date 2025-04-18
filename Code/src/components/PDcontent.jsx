import React from "react";

export const Content = ({ patientUpdate, nextAppointment, doctors }) => {
  return (
    <div className="pd--contentcontainer">
      <div className="pd--left-div">
        <div className="pd--title">
          <h3 className="pd--h3">Quick Updates</h3>
        </div>
        <div className="info">
          <p className="pd--p1">
            <strong className="pd--strong">Date:</strong> {patientUpdate.date}
          </p>
          <p className="pd--p1">
            <strong className="pd--strong">Time:</strong> {patientUpdate.time}
          </p>
          <h3 className="pd--h3">Vitals:</h3>
          <p className="pd--p1">
            <strong className="pd--strong">Blood Pressure:</strong>{" "}
            {patientUpdate.bloodPressure}
          </p>
          <p className="pd--p1">
            <strong className="pd--strong">Heart Rate:</strong> {patientUpdate.heartRate}
          </p>
          <p className="pd--p1">
            <strong className="pd--strong">Oxygen Saturation:</strong>{" "}
            {patientUpdate.oxygenSaturation}
          </p>
        </div>
      </div>

      <div className="pd--right-divs">
        <div className="pd--top-right">
          <div className="pd--title">
            <h3>Appointments</h3>
            <p className="pd--p1">
              <strong className="pd--strong">Date:</strong> {nextAppointment.date}
            </p>
            <p className="pd--p1">
              <strong className="pd--strong">Day:</strong> {nextAppointment.day}
            </p>
            <p className="pd--p1">
              <strong className="pd--strong">Time:</strong> {nextAppointment.time}
            </p>
          </div>
        </div>
        <div className="pd--bottom-right">
          <div className="pd--title">
            <h3 className="pd--h3">Doctors</h3>
            {doctors.map((doctor, index) => (
              <p className="pd--p1" key={index}>
                <strong className="pd--strong">{doctor}</strong>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
