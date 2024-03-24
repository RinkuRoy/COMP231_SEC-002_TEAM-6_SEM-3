using System;
using System.Collections.Generic;
using System.Windows;
using System.Windows.Controls;

namespace DoctorAppointmentManager
{public partial class MainWindow : Window
{
    // Define the property outside of any methods
    public List<Appointment> Appointments { get; set; }

    public class Appointment
    {
        public int Id { get; set; }
        public string PatientName { get; set; }
        public DateTime Date { get; set; }
        public string Status { get; set; }
    }

    public MainWindow()
    {
        InitializeComponent();

        // Instantiate the Appointments list and assign it to the Appointments property
        Appointments = new List<Appointment>
        {
            new Appointment { Id = 1, PatientName = "Rinku Roy", Date = DateTime.Now.AddDays(1), Status = "Pending" },
            new Appointment { Id = 2, PatientName = "Ana Jose", Date = DateTime.Now.AddDays(2), Status = "Pending" },
            new Appointment { Id = 3, PatientName = "Abu Sayed", Date = DateTime.Now.AddDays(3), Status = "Pending" },
            new Appointment { Id = 4, PatientName = "Megha", Date = DateTime.Now.AddDays(4), Status = "Pending" },
            new Appointment { Id = 5, PatientName = "Shroboni Poitto", Date = DateTime.Now.AddDays(5), Status = "Pending" },
            new Appointment { Id = 6, PatientName = "Sajib Ghosh", Date = DateTime.Now.AddDays(6), Status = "Pending" }
        };

            // Bind the Appointments property to the ListView
            AppointmentsListView.ItemsSource = Appointments;
        }

        private void ConfirmButton_Click(object sender, RoutedEventArgs e)
        {
            if (AppointmentsListView.SelectedItem is Appointment selectedAppointment && selectedAppointment.Status != "Confirmed")
            {
                selectedAppointment.Status = "Confirmed";
                AppointmentsListView.Items.Refresh();
            }
        }

        private void CancelButton_Click(object sender, RoutedEventArgs e)
        {
            if (AppointmentsListView.SelectedItem is Appointment selectedAppointment && selectedAppointment.Status != "Canceled")
            {
                selectedAppointment.Status = "Canceled";
                AppointmentsListView.Items.Refresh();
            }
        }
    }
}
