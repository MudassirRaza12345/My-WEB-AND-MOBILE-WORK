using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using MySql.Data;
using MySql.Data.MySqlClient;

namespace DataGrid_with_database
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string conString = "server = localhost; user id = root; password = Root; database = company_database" ;
            string loginQuery = "SELECT* FROM login WHERE username ='"+textBox1.Text+"' and password='"+textBox2.Text+"'";
            MySqlConnection con = new MySqlConnection(conString);
            MySqlCommand cmd = new MySqlCommand(loginQuery, con);
            MySqlDataReader reader;
            int count = 0;
            try
            {
                con.Open();
                reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    count = count + 1;
                }
                if (count >= 1)
                {
                    MessageBox.Show("Login Succesfully!!","Alert", MessageBoxButtons.OK, MessageBoxIcon.Information);
                    Form2 a = new Form2();
                    a.Show();
                    this.Hide();
                }
                else
                {
                    MessageBox.Show("Invalid username and password");
                    textBox1.Text = "" ;
                    textBox2.Text = "" ;
                }

            }
            catch (Exception ex)
            {
                MessageBox.Show("Unable to get Value due to" +ex);
            }
        }
    }
}
