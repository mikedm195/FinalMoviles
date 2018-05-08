package com.mike.itesm.Adapters;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentTransaction;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.CardView;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import com.mike.itesm.Objects.Viaje;
import com.mike.itesm.android.R;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;

/**
 * Created by mike on 08/05/18.
 */

public class ViajesAdapter extends RecyclerView.Adapter<ViajesAdapter.ViewHolder>{

    ArrayList<Viaje> mDataSet = null;

    public ViajesAdapter(ArrayList<Viaje> viajes)
    {
        mDataSet = viajes;
    }

    @Override
    public ViajesAdapter.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View childView =
                LayoutInflater.from(parent.getContext()).inflate(R.layout.viaje_detail, parent, false);
        return new ViewHolder(childView);
    }

    @Override
    public void onBindViewHolder(ViajesAdapter.ViewHolder holder,int position) {
        Viaje data = mDataSet.get(position);

        String destino = data.getDestino();
        String descripcion = data.getDescripcion();
        String imageURL = data.getFotografia();
        String price = data.getPrecio();

        holder.destinoTxt.setText(destino);
        holder.precioTxt.setText("$" + price.toString());
        URL url = null;
        try {
            url = new URL(imageURL);
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
        Bitmap bmp = null;
        try {
            bmp = BitmapFactory.decodeStream(url.openConnection().getInputStream());
        } catch (IOException e) {
            e.printStackTrace();
        }
        holder.fotografia.setImageBitmap(bmp);
        holder.descripcionTxt.setText(descripcion);

    }

    @Override
    public int getItemCount() {
        return mDataSet.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder{
        TextView destinoTxt, descripcionTxt, fotografiaTxt, precioTxt;
        ImageView fotografia;
        CardView card;

        public ViewHolder(final View viewItem) {
            super(viewItem);
            fotografia = (ImageView) viewItem.findViewById(R.id.thumbnailCart);
            card = (CardView)  viewItem.findViewById(R.id.shoppingcart_card);
            destinoTxt = (TextView) viewItem.findViewById(R.id.destinoText);
            descripcionTxt = (TextView) viewItem.findViewById(R.id.descripcionText);
            precioTxt = (TextView) viewItem.findViewById(R.id.precioCartText);

        }

    }
}

