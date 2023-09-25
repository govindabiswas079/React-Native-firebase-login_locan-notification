package com.nativefirebase;

import android.content.Intent;
import android.os.Bundle;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import static io.invertase.firebase.app.ReactNativeFirebaseApp.getApplicationContext;
import androidx.annotation.NonNull;

public class setInervalModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;
    Intent service = new Intent(getApplicationContext(), setInervalService.class);

    setInervalModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @ReactMethod
    public void startTask(String message) {
        Bundle bundle = new Bundle();
        bundle.putString("type", "start");
        service.putExtras(bundle);
    }

    @ReactMethod
    public void stopTask(String message) {
        Bundle bundle = new Bundle();
        bundle.putString("type", "stop");
        service.putExtras(bundle);
    }

    @NonNull
    @Override
    public String getName() {
        return null;
    }
}
