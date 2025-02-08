# Kubernetes DevOps Project

This project demonstrates a complete Kubernetes setup with HPA (Horizontal Pod Autoscaling), NGINX Ingress, and Let's Encrypt SSL certification.

## Components

- Frontend Deployment & Service (React application)
- Backend Deployment & Service (Node.js application)
- Horizontal Pod Autoscaler (HPA)
- NGINX Ingress Controller
- Let's Encrypt SSL Certificate Integration
- Domain Configuration (k8.webprojects.live)

## Prerequisites

- Kubernetes cluster
- Helm package manager
- kubectl configured with your cluster
- cert-manager installed
- NGINX Ingress Controller installed

## Installation

1. Install NGINX Ingress Controller:

```bash
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm install nginx-ingress ingress-nginx/ingress-nginx
```

2. Install cert-manager:

```bash
helm repo add jetstack https://charts.jetstack.io
helm install cert-manager jetstack/cert-manager --namespace cert-manager --create-namespace --set installCRDs=true
```

3. Apply Kubernetes manifests:

```bash
kubectl apply -f K8s/
```

## Configuration Files

- `backend-deployment.yaml`: Node.js backend deployment
- `backend-service.yaml`: Service for backend
- `frontend-deployment.yaml`: React frontend deployment
- `frontend-service.yaml`: Service for frontend
- `hpa.yaml`: Horizontal Pod Autoscaler configuration
- `ingress.yaml`: Ingress rules and SSL configuration
- `lets-encrypt.yaml`: Let's Encrypt ClusterIssuer

## Features

- Automatic SSL certificate generation and renewal
- Horizontal Pod Autoscaling based on CPU utilization
- Load balancing with NGINX Ingress
- Containerized frontend and backend applications
- Resource limits and requests configured

## Resource Configuration

- Frontend & Backend:

  - CPU Request: 100m
  - CPU Limit: 500m
  - Memory Request: 128Mi
  - Memory Limit: 256Mi

- HPA Configuration:
  - Min Replicas: 1
  - Max Replicas: 2
  - Target CPU Utilization: 50%

## URLs

- Frontend: https://k8.webprojects.live/
- Backend API: https://k8.webprojects.live/api
