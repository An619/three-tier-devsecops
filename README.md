# Three-Tier DevSecOps & GitOps Enterprise Project

A production-grade, three-tier web application (React + Node.js/Express + MongoDB) deployed via a complete, automated DevSecOps and GitOps pipeline. 

> **Status:** Paused. Phases 1–7 are complete locally. AWS EKS migration and advanced enterprise local features are pending.

## 🏛️ Provenance and License
This project is a customized fork of [AmanPathak-DevOps/End-to-End-Kubernetes-Three-Tier-DevSecOps-Project](https://github.com/AmanPathak-DevOps/End-to-End-Kubernetes-Three-Tier-DevSecOps-Project), used under the **Apache License 2.0**. Significant modifications have been made to modernize the codebase, rewrite the Dockerfiles, and implement a cloud-native CI/CD pipeline.

## 🛠️ Implemented Tech Stack
*   **Application:** React 18, Node.js 20, MongoDB 6
*   **Containerization:** Docker (Multi-stage builds, Nginx reverse proxy, non-root users)
*   **CI/CD:** GitHub Actions
*   **Security:** Trivy (Image Scanning - fails pipeline on CRITICAL/HIGH CVEs)
*   **Orchestration:** Kubernetes (Minikube)
*   **GitOps:** Argo CD (Automated sync and self-healing)
*   **Monitoring:** Prometheus & Grafana (Installed via Helm)
*   **Infrastructure as Code:** Terraform (Modular code written, targeting AWS `us-east-2`)

## ✅ Completed Phases (Progress Tracker)
- [x] **Phase 1:** Fork Audit & Cleanup (Removed original branding, updated README, licensing).
- [x] **Phase 2:** App Modernization (React 18, MUI v5, fixed broken dependencies).
- [x] **Phase 3:** Multi-stage Dockerization & Nginx Reverse Proxy.
- [x] **Phase 4:** Local Kubernetes Deployment (Minikube).
- [x] **Phase 5:** CI/CD Pipeline (GitHub Actions) & DevSecOps (Trivy scanning & patching).
- [x] **Phase 6:** GitOps with Argo CD (Automated sync).
- [x] **Phase 7:** Basic Observability (Prometheus & Grafana via Helm).

## ⏳ Pending Phase 8: Enterprise Upgrades & AWS EKS (The 5-YOE Backlog)
*The following tasks were planned and must be implemented locally first, then migrated to AWS:*
- [ ] **Stateful Workloads:** Convert MongoDB to a StatefulSet with PVCs. Deploy Redis (Caching), RabbitMQ (Message Queue), and Elasticsearch + Kibana + Filebeat (Logging).
- [ ] **High Availability:** Add Pod Anti-Affinity rules to Frontend/Backend. Implement Horizontal Pod Autoscaler (HPA).
- [ ] **Ingress (Local):** Enable Minikube Ingress addon and route traffic to the frontend.
- [ ] **Terraform Remote State:** Create S3 bucket and DynamoDB table for state locking.
- [ ] **AWS EKS Provisioning:** Run `terraform apply` to create the VPC and EKS cluster.
- [ ] **Cloud Security:** Install External Secrets Operator (ESO) to pull from AWS Secrets Manager. Implement IRSA.
- [ ] **Cloud Ingress:** Install AWS Load Balancer Controller, ExternalDNS, and Cert-Manager.
- [ ] **Kubernetes RBAC:** Map AWS IAM to K8s RBAC via EKS Access Entries (Least Privilege).
- [ ] **Secure Access:** Configure AWS SSM to access nodes without SSH keys.

## 🚀 How to Resume the Project
When returning to this project, follow these exact steps to wake up the local environment:

### 1. Start the Cluster
Ensure Docker Desktop is running, then open VS Code terminal:
```bash
minikube start --memory=6144 --cpus=4