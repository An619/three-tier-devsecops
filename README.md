# Three-Tier DevSecOps Project

A three-tier web application — React frontend, Node.js/Express backend, MongoDB database — deployed through a complete DevSecOps pipeline: Docker → Jenkins (with SonarQube, Trivy, OWASP Dependency-Check) → Kubernetes (Minikube first, then AWS EKS) → Argo CD (GitOps) → Prometheus + Grafana (monitoring).

> **Status:** In active development. Build phases and deployment verification are being completed and documented progressively. Do not assume any phase below is working until it is described as verified in this README.

## Provenance and License

This project is a fork and substantial customization of
[AmanPathak-DevOps/End-to-End-Kubernetes-Three-Tier-DevSecOps-Project](https://github.com/AmanPathak-DevOps/End-to-End-Kubernetes-Three-Tier-DevSecOps-Project),
used under the **Apache License 2.0** (see [LICENSE](LICENSE), which preserves the original copyright notice).

Per Apache 2.0 §4(b), significant modifications are being made to this project, including:

- Rewritten Dockerfiles for modern, minimal base images
- Rewritten Jenkins pipelines targeting Docker Hub instead of the original AWS ECR account
- Rewritten Kubernetes manifests for local Minikube first, then AWS EKS
- Security and storage configuration corrections
- Removal of all original-developer branding, credentials and demo assets
- New CI/CD, GitOps and monitoring configuration

## Maintainer

An619 — [github.com/An619](https://github.com/An619)

## Repository Layout

| Folder | Purpose |
|---|---|
| `Application-Code/` | React frontend, Node.js/Express backend, MongoDB connection |
| `Jenkins-Pipeline-Code/` | Jenkinsfiles for CI/CD (being rewritten) |
| `Jenkins-Server-TF/` | Terraform for provisioning the Jenkins EC2 server |
| `Kubernetes-Manifests-file/` | Kubernetes manifests (being rewritten) |
| `assets/` | Documentation assets |

## Progress

- [x] Fork, rename, detach from upstream
- [x] Remove original-developer branding and demo assets
- [ ] Phase 1 — Repository inspection and customization
- [ ] Phase 2 — Application and Docker
- [ ] Phase 3 — Local Kubernetes (Minikube)
- [ ] Phase 4 — Jenkins CI/CD
- [ ] Phase 5 — DevSecOps tools (SonarQube, Trivy, OWASP DC)
- [ ] Phase 6 — GitOps (Argo CD)
- [ ] Phase 7 — Monitoring (Prometheus, Grafana)
- [ ] Phase 8 — AWS EKS migration
- [ ] Phase 9 — Final documentation

## License

Apache License 2.0 — see [LICENSE](LICENSE). Original copyright notice preserved. Modifications copyright © An619, 2026.