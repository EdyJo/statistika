package com.example.statistik.edukasi;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import java.io.IOException;
import org.json.JSONObject;

@WebServlet("/api/data")
public class DataServlet extends HttpServlet {
  @Override
  protected void doPost(HttpServletRequest request, HttpServletResponse response) 
      throws ServletException, IOException {
    
    JSONObject requestData = new JSONObject(request.getReader().readLine());
    String name = requestData.getString("name");
    String data = requestData.getString("data");
    String median = requestData.getString("median");

    // Simpan ke database (contoh: log ke console)
    System.out.println("Data dari mahasiswa: " + name);
    System.out.println("Data terurut: " + data);
    System.out.println("Median: " + median);

    // Kirim respons
    response.setContentType("application/json");
    response.getWriter().write(new JSONObject()
        .put("status", "success")
        .put("message", "Data tersimpan").toString());
  }
}
