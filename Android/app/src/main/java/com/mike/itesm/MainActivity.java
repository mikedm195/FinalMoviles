package com.mike.itesm;

import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.MenuItem;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.AuthFailureError;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.mike.itesm.Adapters.ViajesAdapter;
import com.mike.itesm.Objects.Viaje;
import com.mike.itesm.android.Login;
import com.mike.itesm.android.R;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import static com.mike.itesm.Services.Services.AGENCIA_API;
import static com.mike.itesm.Services.Services.CLIENTE_API;
import static com.mike.itesm.Services.Services.VIAJE_API;

public class MainActivity extends AppCompatActivity {

    private RecyclerView mRecyclerView;
    private ViajesAdapter mAdapter;

    private TextView nombreAgencia;
    ArrayList<Viaje> viajeList = new ArrayList<Viaje>();

    private BottomNavigationView.OnNavigationItemSelectedListener mOnNavigationItemSelectedListener
            = new BottomNavigationView.OnNavigationItemSelectedListener() {

        @Override
        public boolean onNavigationItemSelected(@NonNull MenuItem item) {
            switch (item.getItemId()) {
                case R.id.navigation_home:

                    return true;
                case R.id.navigation_dashboard:

                    return true;
                case R.id.navigation_notifications:

                    return true;
            }
            return false;
        }
    };

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        nombreAgencia = (TextView) findViewById(R.id.agencia);
        mRecyclerView = (RecyclerView) findViewById(R.id.viajes_list_recycler);
        mRecyclerView.setLayoutManager(new LinearLayoutManager(this));

        getAgencia();

        StringRequest loginReq = new StringRequest(Request.Method.GET, VIAJE_API,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        try {
                            JSONArray res = new JSONArray(response);

                            for(int i = 0;i<res.length();i++){
                                JSONObject viajeObject = res.getJSONObject(i);
                                Viaje v = new Viaje();
                                v.setDestino(viajeObject.getString("destino"));
                                v.setDescripcion(viajeObject.getString("descripcion"));
                                v.setFotografia(viajeObject.getString("fotografia"));
                                v.setPrecio(viajeObject.getString("precio"));
                                viajeList.add(v);
                                Log.w("value",v.getDestino()+"");
                            }
                            mAdapter = new ViajesAdapter(viajeList);
                            mRecyclerView.setAdapter(mAdapter);
                            mAdapter.notifyDataSetChanged();

                        } catch (JSONException e) {
                            e.printStackTrace();
                            Toast.makeText(MainActivity.this, "Error! " + e.getLocalizedMessage() , Toast.LENGTH_SHORT).show();
                        }
                    }
                },
                new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {

                    }
                });

        RequestQueue requestQueue = Volley.newRequestQueue(this);
        requestQueue.add(loginReq);


        BottomNavigationView navigation = (BottomNavigationView) findViewById(R.id.navigation);
        navigation.setOnNavigationItemSelectedListener(mOnNavigationItemSelectedListener);
    }

    void getAgencia(){
        StringRequest loginReq = new StringRequest(Request.Method.GET, AGENCIA_API,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        try {
                            JSONArray res = new JSONArray(response);

                            JSONObject ag = res.getJSONObject(0);

                            nombreAgencia.setText(ag.getString("nombre"));

                        } catch (JSONException e) {
                            e.printStackTrace();
                            Toast.makeText(MainActivity.this, "Error! " + e.getLocalizedMessage() , Toast.LENGTH_SHORT).show();
                        }
                    }
                },
                new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {

                    }
                });

        RequestQueue requestQueue = Volley.newRequestQueue(this);
        requestQueue.add(loginReq);
    }



}
