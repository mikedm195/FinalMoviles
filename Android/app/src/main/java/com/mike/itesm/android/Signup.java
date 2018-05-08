package com.mike.itesm.android;

import android.app.ProgressDialog;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.android.volley.AuthFailureError;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

import static com.mike.itesm.Services.Services.CLIENTE_API;

public class Signup extends AppCompatActivity {
    Button loginBtn, signupBtn;
    EditText nombreTxt, apellidoPaternoTxt, apellidoMaternoTxt, imagenTxt, contactoText;
    ProgressDialog progress_bar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signup);
        View view = this.getWindow().getDecorView();

        loginBtn = (Button)findViewById(R.id.loginButtonSignup);
        signupBtn = (Button)findViewById(R.id.signupButton);
        nombreTxt = (EditText)findViewById(R.id.firstNameTextField);
        apellidoPaternoTxt = (EditText)findViewById(R.id.apellidoPaternoTextField);
        apellidoMaternoTxt = (EditText)findViewById(R.id.apellidoMaternoTextField);
        imagenTxt = (EditText)findViewById(R.id.fotoTextField);
        contactoText = (EditText)findViewById(R.id.contactoTextField);

        loginBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent actividad = new Intent(Signup.this, Login.class);
                startActivity(actividad);
            }
        });

        signupBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                signup();
            }
        });
    }

    private void signup()
    {
        final ProgressDialog progress_bar = new ProgressDialog(Signup.this);
        progress_bar.setMessage("Cargando");
        progress_bar.setCancelable(false);
        progress_bar.show();

        StringRequest signupReq = new StringRequest(Request.Method.POST, CLIENTE_API,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        progress_bar.cancel();

                        Intent actividad = new Intent(Signup.this, Login.class);
                        startActivity(actividad);

                    }
                },
                new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        progress_bar.cancel();
                    }
                }){
            @Override
            protected Map<String, String> getParams() throws AuthFailureError {
                Map<String,String> params = new HashMap<>();
                params.put("nombre",nombreTxt.getText().toString());
                params.put("apellido_paterno",apellidoPaternoTxt.getText().toString());
                params.put("apellido_materno",apellidoMaternoTxt.getText().toString());
                params.put("fotografia",imagenTxt.getText().toString());
                params.put("contacto",contactoText.getText().toString());

                return params;
            }
        };

        RequestQueue requestQueue = Volley.newRequestQueue(this);
        requestQueue.add(signupReq);
    }
}
