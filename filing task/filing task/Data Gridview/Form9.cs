using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO;

namespace Data_Gridview
{
    public partial class Form9 : Form
    {
        public Form9()
        {
            InitializeComponent();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            FolderBrowserDialog f = new FolderBrowserDialog();
            f.ShowDialog();
            textBox1.Text = f.SelectedPath;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string sur = textBox1.Text;
            string distination = textBox2.Text;
            bool exists = System.IO.Directory.Exists(sur);
            if (exists)
            {
                System.IO.Directory.CreateDirectory(distination);
                 System.IO.Directory.Delete(sur, true);
            }
            MessageBox.Show(" File has been move ");
        }

        private void button2_Click(object sender, EventArgs e)
        {
            Form1 i = new Form1();
            i.Show();
            this.Hide();
        }
    }
}
