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
    public partial class Form2 : Form
    {
        public void clean()
        {
            textBox1.Text = "";
            textBox2.Text = "";
            textBox3.Text = "";
            textBox4.Text = "";
            textBox5.Text = "";
            textBox6.Text = "";
            textBox7.Text = "";
            comboBox1.Text = "";
            comboBox2.Text = "";
            comboBox3.Text = "";
            comboBox4.Text = "";
            comboBox5.Text = "";
            comboBox6.Text = "";
            textBox1.Focus();
        }
        public void getRecords()
        {
            string conString = "server = localhost; user id = root; password = Root; database = company_database";
            MySqlConnection con = new MySqlConnection(conString);
            MySqlCommand cmd = new MySqlCommand("Select * from getData", con);
            DataTable dataTable = new DataTable();
            con.Open();
            MySqlDataReader sdr = cmd.ExecuteReader();
            dataTable.Load(sdr);
            con.Close();
            dataGridView1.DataSource = dataTable;
        }

        public Form2()
        {
            InitializeComponent();
        }

        private void Form2_Load(object sender, EventArgs e)
        {
     
        }

        private void button1_Click(object sender, EventArgs e)
        {
            try
            {
                string conString = "server = localhost; user id = root; password = Root; database = company_database";
                MySqlConnection con = new MySqlConnection(conString);
                MySqlCommand cmd = new MySqlCommand("INSERT INTO getData VALUES (@id, @citizen_no, @forname, @surname, @pin, @identification_mark, @mobile_no, @country_of_stay, @priority, @religion, @blood_group, @gender, @martial_status)", con);
                cmd.CommandType = CommandType.Text;
                cmd.Parameters.AddWithValue("@id", textBox7.Text);
                cmd.Parameters.AddWithValue("@citizen_no", textBox1.Text);
                cmd.Parameters.AddWithValue("@forname", textBox2.Text);
                cmd.Parameters.AddWithValue("@surname", textBox4.Text);
                cmd.Parameters.AddWithValue("@pin", textBox3.Text);
                cmd.Parameters.AddWithValue("@identification_mark", textBox5.Text);
                cmd.Parameters.AddWithValue("@mobile_no", textBox6.Text);
                cmd.Parameters.AddWithValue("@country_of_stay", comboBox1.Text);
                cmd.Parameters.AddWithValue("@priority", comboBox2.Text);
                cmd.Parameters.AddWithValue("@religion", comboBox3.Text);
                cmd.Parameters.AddWithValue("@blood_group", comboBox4.Text);
                cmd.Parameters.AddWithValue("@gender", comboBox5.Text);
                cmd.Parameters.AddWithValue("@martial_status", comboBox6.Text);

                con.Open();
                cmd.ExecuteNonQuery();
                con.Close();

                MessageBox.Show("Record successfully saved in database ", "SAVED", MessageBoxButtons.OK,MessageBoxIcon.Information);
                this.clean();
                this.getRecords();


            }
            catch (Exception ex)
            {
                MessageBox.Show("Unable to get value due to "+ex);
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            try
            {
                string conString = "server = localhost; user id = root; password = Root; database = company_database";
                MySqlConnection con = new MySqlConnection(conString);
                MySqlCommand cmd = new MySqlCommand("DELETE FROM getData WHERE id ='"+textBox7.Text+"'", con);
                cmd.CommandType = CommandType.Text;
                //cmd.Parameters.AddWithValue("@id", this.productid);

                con.Open();
                cmd.ExecuteNonQuery();
                con.Close();

                MessageBox.Show("Record successfully Deleted in the database ", "DELETED", MessageBoxButtons.OK, MessageBoxIcon.Information);

                getRecords();
                clean();

            }
            catch (Exception ex)
            {
                MessageBox.Show("Unable to delete record due to "+ex);
            }
        }

        private void button4_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void button5_Click(object sender, EventArgs e)
        {
            getRecords();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            try
            {
                string conString = "server = localhost; user id = root; password = Root; database = company_database";
                MySqlConnection con = new MySqlConnection(conString);
                MySqlCommand cmd = new MySqlCommand("UPDATE getData SET citizen_no=@citizen_no ,forname=@forname,surname=@surname,pin=@pin ,identification_mark=@identification_mark,mobile_no=@mobile_no,country_of_stay=@country_of_stay,priority=@priority,religion=@religion ,blood_group=@blood_group,gender=@gender,martial_status=@martial_status  WHERE id=@id", con);

                cmd.CommandType = CommandType.Text;
                cmd.Parameters.AddWithValue("@id", textBox7.Text);
                cmd.Parameters.AddWithValue("@citizen_no", textBox1.Text);
                cmd.Parameters.AddWithValue("@forname", textBox2.Text);
                cmd.Parameters.AddWithValue("@surname", textBox4.Text);
                cmd.Parameters.AddWithValue("@pin", textBox3.Text);
                cmd.Parameters.AddWithValue("@identification_mark", textBox5.Text);
                cmd.Parameters.AddWithValue("@mobile_no", textBox6.Text);
                cmd.Parameters.AddWithValue("@country_of_stay", comboBox1.Text);
                cmd.Parameters.AddWithValue("@priority", comboBox2.Text);
                cmd.Parameters.AddWithValue("@religion", comboBox3.Text);
                cmd.Parameters.AddWithValue("@blood_group", comboBox4.Text);
                cmd.Parameters.AddWithValue("@gender", comboBox5.Text);
                cmd.Parameters.AddWithValue("@martial_status", comboBox6.Text);

                con.Open();
                cmd.ExecuteNonQuery();
                con.Close();

                MessageBox.Show("Record successfully updated in database ", "UPDATED", MessageBoxButtons.OK, MessageBoxIcon.Information);

                getRecords();
                clean();

            }
            catch (Exception ex)
            {
                MessageBox.Show("Unable to update data due to "+ex);
            }
        }

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            textBox7.Text = dataGridView1.SelectedRows[0].Cells[0].Value.ToString();
            textBox1.Text = dataGridView1.SelectedRows[0].Cells[1].Value.ToString();
            textBox2.Text = dataGridView1.SelectedRows[0].Cells[2].Value.ToString();
            textBox3.Text = dataGridView1.SelectedRows[0].Cells[3].Value.ToString();
            textBox4.Text = dataGridView1.SelectedRows[0].Cells[4].Value.ToString();
            textBox5.Text = dataGridView1.SelectedRows[0].Cells[5].Value.ToString();
            textBox6.Text = dataGridView1.SelectedRows[0].Cells[6].Value.ToString();
            comboBox1.Text = dataGridView1.SelectedRows[0].Cells[7].Value.ToString();
            comboBox2.Text = dataGridView1.SelectedRows[0].Cells[8].Value.ToString();
            comboBox3.Text = dataGridView1.SelectedRows[0].Cells[9].Value.ToString();
            comboBox4.Text = dataGridView1.SelectedRows[0].Cells[10].Value.ToString();
            comboBox5.Text = dataGridView1.SelectedRows[0].Cells[11].Value.ToString();
            comboBox6.Text = dataGridView1.SelectedRows[0].Cells[12].Value.ToString();
        }

        
    }
}
