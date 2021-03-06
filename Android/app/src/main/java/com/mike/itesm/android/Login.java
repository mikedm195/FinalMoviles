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
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.mike.itesm.MainActivity;
import com.mike.itesm.Objects.User;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

import com.mike.itesm.Objects.User;

import static com.mike.itesm.Services.Services.CLIENTE_API;

public class Login extends AppCompatActivity {
    Button loginBtn, signupBtn;
    EditText emailTxt, passwordTxt;
    ProgressDialog progress_bar;
    private User userData;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        View view = this.getWindow().getDecorView();

        progress_bar = new ProgressDialog(Login.this);

        loginBtn = (Button)findViewById(R.id.loginButton);
        signupBtn = (Button)findViewById(R.id.signupButtonLogin);
        emailTxt = (EditText)findViewById(R.id.emailTextField);
        passwordTxt = (EditText)findViewById(R.id.passwordTextField);

        signupBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent actividad = new Intent(Login.this, Signup.class);
                startActivity(actividad);
            }
        });

        loginBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                login();
            }
        });
    }

    private void login()
    {
        progress_bar.setMessage("Cargando");
        progress_bar.setCancelable(false);
        progress_bar.show();

        StringRequest loginReq = new StringRequest(Request.Method.GET, CLIENTE_API + "auth?email=" + emailTxt.getText() + "&password=" + passwordTxt.getText(),
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        progress_bar.cancel();
                        try {
                            JSONObject res = new JSONObject(response);
                            if (!res.getString("id").equals("-1"))
                            {
                                Toast.makeText(Login.this, "Bienvenido!", Toast.LENGTH_SHORT).show();
                                userData.getInstance().setId(res.getInt("id"));

                                Intent actividad = new Intent(Login.this, MainActivity.class);
                                startActivity(actividad);

                            } else  {
                                Toast.makeText(Login.this, "Error!!" , Toast.LENGTH_SHORT).show();
                            }
                        } catch (JSONException e) {
                            e.printStackTrace();
                            Toast.makeText(Login.this, "Error! " + e.getLocalizedMessage() , Toast.LENGTH_SHORT).show();
                        }
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
                Map<String,String> map = new HashMap<>();
                map.put("email",emailTxt.getText().toString());
                map.put("password",passwordTxt.getText().toString());
                return map;
            }
        };

        RequestQueue requestQueue = Volley.newRequestQueue(this);
        requestQueue.add(loginReq);
    }
}
