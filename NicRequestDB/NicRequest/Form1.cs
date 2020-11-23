using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Xml.Schema;
using MySql.Data;
using MySql.Data.MySqlClient;

namespace NicRequest
{
    public partial class Form1 : Form
    {
        MySqlConnection con =
         new MySqlConnection(@"server=localhost; user id=root ; password  =aisha2033;     database=vp");


        public Form1()
        {
            InitializeComponent();
        }


        private string GetSelectedItem1()
        {
            if (radioButton1.Checked)
            {
                return "MALE";
            }
            else if (radioButton2.Checked)
            {
                return "FEMALE";
            }
            else return "None";
        }
        private string GetSelectedItem2()
        {
            if (radioButton3.Checked)
            {
                return "MARRIED";
            }
            else if (radioButton4.Checked)
            {
                return "UNMARRIED";
            }
            else return "NONE";
        }
        private string GetSelectedItem3()
        {
            if (radioButton5.Checked)
            {
                return "NORMAL";
            }
            else if (radioButton6.Checked)
            {
                return "URGENT";
            }
            else if (radioButton7.Checked)
            {
                return "EXECUTIVE";
            }
            else
                return "NONE";
        }
        private string GetSelectedItem4()
        {
            if (radioButton8.Checked)
            {
                return "SIMPLE";
            }
            else if (radioButton9.Checked)
            {
                return "SMART";
            }
            else return "NONE";
        }
        private string GetSelectedItem5()
        {
            if (radioButton10.Checked)
            {
                return "PERMANENT ADDRESS";
            }
            else if (radioButton11.Checked)
            {
                return "PRESENT ADDRESS";
            }
            else return "NONE";
        }



        private void groupBox4_Enter(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            /*  if (textBox1.Text == "" || textBox2.Text == "" || textBox3.Text == "" ||
                  textBox4.Text == "" || textBox5.Text == "" || textBox6.Text == "" || (radioButton1.Checked == false &&
                  radioButton2.Checked == false) || (radioButton3.Checked == false && radioButton4.Checked == false) ||
                  (radioButton8.Checked == false && radioButton9.Checked == false) ||
                  (radioButton10.Checked == false && radioButton11.Checked == false) ||
                  (radioButton6.Checked == false && radioButton7.Checked == false && radioButton5.Checked == false) ||
                  comboBox1.SelectedItem == null || comboBox2.SelectedItem == null || comboBox3.SelectedItem == null)
                  MessageBox.Show("Please fill all columns");
              else */
            {
                /* dataGridView1.Rows.Add(textBox1.Text, textBox2.Text,
                 GetSelectedItem1(), GetSelectedItem2(), textBox5.Text, comboBox1.SelectedItem,
                 comboBox2.SelectedItem, textBox6.Text, textBox3.Text,
                GetSelectedItem3(), GetSelectedItem4(), comboBox3.SelectedItem, textBox4.Text,
                    GetSelectedItem5()); */


                try
                {
                    //This is my connection string i have assigned the database file address path  
                    string MyConnection2 = @"server=localhost; user id=root ; password  =aisha2033;     database=vp";
                    //This is my insert query in which i am taking input from the user through windows forms  
                    string Query = "insert into vp.NICRequest(Name,Surname,Gender,MaritalStatus,IdMark,Religion," +
                        "ContactNo,CitizenNo,Priority,CardType,City,Pin,CardDelivery) " +
                        "values('" + this.textBox1.Text + "','" + this.textBox2.Text + "','" +
                        this.GetSelectedItem1() + "''" + this.GetSelectedItem2() + "','" + this.textBox5.Text + "','" +
                        this.comboBox1.SelectedItem + "','" + this.comboBox2.SelectedItem + "','" + this.textBox6.Text + "','" +
                        this.textBox3.Text + "','" + this.GetSelectedItem3() + "','" + this.GetSelectedItem4() + "','" +
                        this.comboBox3.SelectedItem + "','" + this.textBox4.Text + "','" + this.GetSelectedItem5() + "');";
                    //This is  MySqlConnection here i have created the object and pass my connection string.  
                    MySqlConnection MyConn2 = new MySqlConnection(MyConnection2);
                    //This is command class which will handle the query and connection object.  
                    MySqlCommand MyCommand2 = new MySqlCommand(Query, MyConn2);
                    MySqlDataReader MyReader2;
                    MyConn2.Open();
                    MyReader2 = MyCommand2.ExecuteReader();     // Here our query will be executed and data saved into the database.  
                    MessageBox.Show("Data Inserted");
                    getRecords();
                    reset();
                    while (MyReader2.Read())
                    {
                    }
                    MyConn2.Close();
                }
                catch (Exception ex)
                {
                    MessageBox.Show(ex.Message);
                }

            }
        }


        private void button2_Click(object sender, EventArgs e)
        {
            MessageBox.Show("enter citezen no for deletion");
            try
            {
                string MyConnection2 = @"server=localhost; user id=root ; password  =aisha2033;     database=vp";
                string Query = "delete from vp.NICRequest where CitizenNo='" + this.textBox3.Text + "';";
                MySqlConnection MyConn2 = new MySqlConnection(MyConnection2);
                MySqlCommand MyCommand2 = new MySqlCommand(Query, MyConn2);
                MySqlDataReader MyReader2;
                MyConn2.Open();
                MyReader2 = MyCommand2.ExecuteReader();
                MessageBox.Show("Data Deleted");
                getRecords();
                reset();
                while (MyReader2.Read())
                {
                }
                MyConn2.Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void button3_Click(object sender, EventArgs e)
        {
            reset();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void groupBox1_Enter(object sender, EventArgs e)
        {

        }

        private void dataGridView1_CellClick(object sender, DataGridViewCellEventArgs e)
        {

        }

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {


        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }
        //create function


        //create function
        private void reset()
        {
            textBox1.Text = "";
            textBox2.Text = "";
            textBox3.Text = "";
            textBox4.Text = "";
            textBox5.Text = "";
            textBox6.Text = "";
            comboBox1.SelectedItem = null;
            comboBox2.SelectedItem = null;
            comboBox3.SelectedItem = null;
            radioButton1.Checked = false;
            radioButton2.Checked = false;
            radioButton3.Checked = false;
            radioButton4.Checked = false;
            radioButton5.Checked = false;
            radioButton6.Checked = false;
            radioButton7.Checked = false;
            radioButton8.Checked = false;
            radioButton9.Checked = false;
            radioButton10.Checked = false;
            radioButton11.Checked = false;


            textBox1.Focus();
        }
        
        private void getrecord()
        {
        dataGridView1.Rows.Add(textBox1.Text, textBox2.Text,
                GetSelectedItem1(), GetSelectedItem2(), textBox5.Text, comboBox1.SelectedItem,
                 comboBox2.SelectedItem, textBox6.Text, textBox3.Text,
                GetSelectedItem3(), GetSelectedItem4(), comboBox3.SelectedItem, textBox4.Text,
                    GetSelectedItem5());
            }


        //create function
        private void getRecords()
        {

            try
            {
                string MyConnection2 = @"server=localhost; user id=root ; password  =aisha2033;     database=vp";
                //Display query  
                string Query = "select * from vp.NICRequest;";
                MySqlConnection MyConn2 = new MySqlConnection(MyConnection2);
                MySqlCommand MyCommand2 = new MySqlCommand(Query, MyConn2);
                //  MyConn2.Open();  
                //For offline connection we weill use  MySqlDataAdapter class.  
                MySqlDataAdapter MyAdapter = new MySqlDataAdapter();
                MyAdapter.SelectCommand = MyCommand2;
                DataTable dTable = new DataTable();
                MyAdapter.Fill(dTable);
                dataGridView1.DataSource = dTable; // here i have assign dTable object to the dataGridView1 object to display data.               
                                                   // MyConn2.Close();  
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void button5_Click(object sender, EventArgs e)
        {
            try
            {
                //This is my connection string i have assigned the database file address path  
                string MyConnection2 = @"server=localhost; user id=root ; password  =aisha2033;     database=vp";
                //This is my insert query in which i am taking input from the user through windows forms  
                string Query = "update NICRequest set Name= '" + textBox1.Text + "',Surname='" + textBox2.Text + "',Gender ='" +
                    GetSelectedItem1() + "',MaritalStatus='" + GetSelectedItem2() + "',IdMark='" + textBox5.Text + "',Religion='" +
                    comboBox1.SelectedItem + "',BloodGroup'" + comboBox2.SelectedItem + "',ContactNo='" + textBox6.Text + "',CitizenNo='" +
                    int.Parse(this.textBox3.Text) + "',Priority='" + GetSelectedItem3() + "',CardType='" + GetSelectedItem4() + "',City='" +
                    comboBox3.SelectedItem + "',Pin='" + textBox4.Text + "',Delivery='" + GetSelectedItem5() + "'" +
                    "WHERE CitizenNo= '" + this.textBox3.Text + "');";
                /*"UPDATE test_db.users SET fname = '"+textBox1.Text+"',
                 * lname = '"+textBoxLName.Text+"', age = "+int.Parse(textBoxAge.Text)+"
                 * WHERE id="+int.Parse(textBoxID.Text);
                 * 
                 * idStudentInfo='" + this.IdTextBox.Text + "',Name='" + this.NameTextBox.Text + "',Father_Name='" + this.FnameTextBox.Text +
                 * "',Age='" + this.AgeTextBox.Text + "',Semester='" + this.SemesterTextBox.Text + "' where idStudentInfo='" + this.IdTextBox.Text
                 * + "';";  */
                //This is  MySqlConnection here i have created the object and pass my connection string.  
                MySqlConnection MyConn2 = new MySqlConnection(MyConnection2);
                //This is command class which will handle the query and connection object.  
                MySqlCommand MyCommand2 = new MySqlCommand(Query, MyConn2);
                MySqlDataReader MyReader2;
                MyConn2.Open();
                MyReader2 = MyCommand2.ExecuteReader();     // Here our query will be executed and data saved into the database.  
                MessageBox.Show("Data Inserted");
                getRecords();
                reset();
                while (MyReader2.Read())
                {
                }
                MyConn2.Close();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }
    }
}
