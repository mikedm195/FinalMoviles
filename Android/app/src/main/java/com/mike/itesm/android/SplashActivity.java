package com.mike.itesm.android;

import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.StrictMode;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentTransaction;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ImageView;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Random;
import java.util.Timer;
import java.util.TimerTask;

public class SplashActivity extends AppCompatActivity {

    int waitTime = 1000;
    ImageView image;
    Bitmap img;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash);

        StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
        StrictMode.setThreadPolicy(policy);

        String arr[] = new String[3];

        arr[0] = "http://ubiquitous.csf.itesm.mx/~pddm-1015019/images/image1.jpg";
        arr[1] = "http://ubiquitous.csf.itesm.mx/~pddm-1015019/images/image2.jpg";
        arr[2] = "http://ubiquitous.csf.itesm.mx/~pddm-1015019/images/image3.jpg";

        image = (ImageView) findViewById(R.id.image);

        Random random = new Random();

        URL url = null;

        try {
            url = new URL(arr[random.nextInt(3)]);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setDoInput(true);
            connection.connect();
            InputStream input = connection.getInputStream();
            Bitmap myBitmap = BitmapFactory.decodeStream(input);
            image.setImageBitmap(myBitmap);
        } catch (IOException e) {
            e.printStackTrace();
        }

        TimerTask task = new TimerTask() {
            @Override
            public void run() {
                Intent actividad = new Intent(SplashActivity.this, Login.class);
                startActivity(actividad);
            }
        };

        Timer timer = new Timer();
        timer.schedule(task, waitTime);

    }
}
