#  Exoplanet Classifier (Frontend)

This is the **frontend** of the Exoplanet Classifier project. It provides a responsive and user-friendly interface for classifying exoplanets based on their parameters. Users can input planetary data and instantly receive predictions powered by a machine learning model.

Built with **React.js** and **Tailwind CSS**, this frontend ensures speed, clarity, and responsiveness across all devices.

---

##  Project Links

 **Live Demo:** [Exoplanet Classifier (Deployed)](https://lnkd.in/geDz7zpV)
 **Project Video:** [Watch on Bitly](http://bit.ly/48brPPI)

---

##  Features

* Interactive input form for planet parameters
* Real-time prediction display
* Responsive design for all screen sizes
* API integration for ML-based predictions
* Clean and minimal user interface

---

##  Tech Stack

* **Frontend Framework:** React.js
* **Styling:** Tailwind CSS
* **Icons:** Lucide React
* **Routing:** React Router DOM

---

##  Backend API

The **backend API** for this project was developed and deployed by a teammate.
It provides endpoints for predicting exoplanet classifications using a trained machine learning model.

You can explore the backend API documentation here:
🔗 **[Backend API Docs – Hugging Face Space](https://touseefahmad-nasa-exoplanet-docker.hf.space/docs#/default/predict_csv_predict_csv_post)**



###  API Request Details

####  Single Prediction

To make a single prediction, send a POST request with the following JSON body to the backend API endpoint:

```json
{
  "depth": 0.01,
  "duration": 2.5,
  "eccentricity": 0.05,
  "inclination": 89.5,
  "period": 3.52,
  "radius": 1.2,
  "semi_major_axis": 0.05,
  "snr": 15.5,
  "stellar_mass": 1.0,
  "stellar_radius": 1.0,
  "stellar_temp": 5778
}
```

 **Endpoint:**

```
POST https://touseefahmad-nasa-exoplanet-docker.hf.space/predict_single
```

---

#### 🔹 Bulk Prediction

For bulk predictions, upload a CSV file containing multiple records.
You can use the following **sample dataset** to test the API:

 [Download Sample CSV](https://drive.google.com/uc?export=download&id=1nDS-aSzo-RPBnlu52ZNCE6Ok-7L2_gT5)

 **Endpoint:**

```
POST https://touseefahmad-nasa-exoplanet-docker.hf.space/predict_csv
```
```

## 👥 Team

* **Frontend Developer:** Aroob
* **Backend Developer:** Touseef Ahmad

---

This project was developed as part of the NASA International Apps Challenge 2025.
