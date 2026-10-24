import java.sql.*;
public class C3Crud{
    static Statement st;
    static public void Show(String title) throws Exception{
        System.out.println(title);
    ResultSet rs=st.executeQuery("SELECT * FROM student");
    while(rs.next()){
        System.out.println(rs.getInt(1)+" "+rs.getString(2)+ " "+rs.getInt(3));
    }
}
public static void main(String[] args) throws Exception  {
   Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/college","root","root");
   st=con.createStatement();
   st.executeUpdate("INSERT INTO student VALUES(2,'shiva',20)");
   Show("inserted values");
   st.executeUpdate("UPDATE student SET marks=90 WHERE id=1");
   Show("updated values");
   st.executeUpdate("DELETE FROM student WHERE id=1");
   Show("deleted values");
   con.close();

}
}