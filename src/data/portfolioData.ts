export type Language = 'pt' | 'en';

export interface Project {
  id: string;
  title: { pt: string; en: string };
  category: 'platform' | 'iac' | 'cicd' | 'observability' | 'roadmap';
  badge: { pt: string; en: string };
  badgeType: 'production' | 'lab' | 'roadmap';
  shortDescription: { pt: string; en: string };
  problemSolved: { pt: string; en: string };
  architecture: { pt: string; en: string };
  myContribution: { pt: string; en: string };
  technicalDecisions: { pt: string[]; en: string[] };
  technologies: string[];
  metricsOrLearnings: { pt: string[]; en: string[] };
  githubUrl?: string;
  demoUrl?: string;
  diagram: {
    steps: {
      step: string;
      label: { pt: string; en: string };
      tech: string;
      desc: { pt: string; en: string };
    }[];
  };
}

export interface ExperienceItem {
  role: { pt: string; en: string };
  company: string;
  client?: string;
  location: string;
  period: { pt: string; en: string };
  summary: { pt: string; en: string };
  bulletPoints: { pt: string[]; en: string[] };
  technologies: string[];
  isCurrent?: boolean;
}

export interface EducationItem {
  degree: { pt: string; en: string };
  institution: string;
  status: { pt: string; en: string };
  year?: string;
  description?: { pt: string; en: string };
}

export interface CertificationItem {
  name: string;
  issuer: string;
  code?: string;
  status: { pt: string; en: string };
  link?: string;
  description: { pt: string; en: string };
}

export interface SkillCategory {
  id: string;
  title: { pt: string; en: string };
  iconName: string;
  description: { pt: string; en: string };
  skills: {
    name: string;
    level: { pt: string; en: string };
    context: { pt: string; en: string };
  }[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Mariana Viana",
    headline: {
      pt: "Engenheira de Cloud, DevOps & Platform Engineering",
      en: "Cloud, DevOps & Platform Engineer",
    },
    tagline: {
      pt: "Especialista em Microsoft Azure, Internal Developer Platform (IDP), Automação de Infraestrutura (Terraform & Ansible), CI/CD e Observabilidade em ambientes corporativos de grande escala.",
      en: "Specialist in Microsoft Azure, Internal Developer Platform (IDP), Infrastructure as Code (Terraform & Ansible), CI/CD, and Observability in large-scale enterprise environments.",
    },
    location: "Brasília, DF — Brasil",
    email: "Marianaviana121@gmail.com",
    phone: "+55 (61) 99227-1063",
    cleanPhone: "5561992271063",
    github: "https://github.com/marianaviana",
    linkedin: "https://linkedin.com/in/mariana-viana",
    statusBadge: {
      pt: "Disponível para Oportunidades (Brasil & Internacional)",
      en: "Open to Opportunities (Brazil & Remote International)",
    },
    bio: {
      pt: [
        "Profissional de TI focada em Cloud Computing, DevOps e Platform Engineering com sólida atuação em ambientes de grande porte corporativo (Banco do Brasil).",
        "Atuo na conexão estratégica entre desenvolvimento de software, infraestrutura em nuvem e operações, impulsionando a maturidade de Internal Developer Platforms (IDP), governança de Infraestrutura como Código (IaC com Terraform e Ansible) e esteiras automatizadas de CI/CD via GitHub Actions.",
        "Possuo Pós-Graduação em Computação em Nuvem pelo UniCEUB, Graduação Tecnológica em Gestão de TI pelo Senac DF e certificação Microsoft Azure Fundamentals (AZ-900). Minha missão é reduzir atritos no ciclo de entrega de software, garantindo resiliência, observabilidade proativa e autonomia para times de engenharia."
      ],
      en: [
        "IT professional focused on Cloud Computing, DevOps, and Platform Engineering with proven experience in enterprise-scale environments (Banco do Brasil).",
        "I work at the strategic intersection of software engineering, cloud infrastructure, and operations—driving the maturity of Internal Developer Platforms (IDP), Infrastructure as Code (Terraform & Ansible), and automated CI/CD pipelines via GitHub Actions.",
        "I hold a Postgraduate Specialization in Cloud Computing from UniCEUB, a Technologist Degree in IT Management from Senac DF, and Microsoft Certified: Azure Fundamentals (AZ-900). My focus is streamlining the software delivery lifecycle with robust security, proactive observability, and technical autonomy for developer teams."
      ]
    },
    highlights: [
      {
        value: "Enterprise Scale",
        label: { pt: "Experiência em ambiente Banco do Brasil", en: "Enterprise scale at Banco do Brasil" }
      },
      {
        value: "Azure & IaC",
        label: { pt: "Terraform, Ansible & Automação de Nuvem", en: "Terraform, Ansible & Cloud Automation" }
      },
      {
        value: "AZ-900",
        label: { pt: "Certificada Microsoft Azure Fundamentals", en: "Microsoft Certified Azure Fundamentals" }
      },
      {
        value: "Pós-Graduada",
        label: { pt: "Especialização em Computação em Nuvem", en: "Postgraduate in Cloud Computing" }
      }
    ]
  },

  skillsCategories: [
    {
      id: "cloud",
      title: { pt: "Cloud & Infraestrutura", en: "Cloud & Infrastructure" },
      iconName: "Cloud",
      description: {
        pt: "Provisionamento, governança, segurança e conectividade em nuvem pública.",
        en: "Provisioning, governance, security, and networking in public cloud."
      },
      skills: [
        {
          name: "Microsoft Azure",
          level: { pt: "Sólida Experiência", en: "Solid Experience" },
          context: {
            pt: "Administração de VMs, Networking (VNet, Subnets, NSG), Key Vault, Azure SQL, Azure Firewall e Azure Policies.",
            en: "Administration of VMs, Networking (VNet, Subnets, NSG), Key Vault, Azure SQL, Azure Firewall, and Azure Policies."
          }
        },
        {
          name: "Fundamentos AWS & GCP",
          level: { pt: "Conhecimento Teórico / Base", en: "Foundational Knowledge" },
          context: {
            pt: "Princípios arquiteturais multi-cloud, computação elástica, storage e IAM.",
            en: "Multi-cloud architectural principles, elastic compute, storage, and IAM."
          }
        },
        {
          name: "Arquitetura em Nuvem",
          level: { pt: "Prática em Produção", en: "Production Practice" },
          context: {
            pt: "Estruturação de ambientes resilientes, segregação de redes e boas práticas de segurança corporativa.",
            en: "Structuring resilient environments, network segmentation, and corporate security best practices."
          }
        }
      ]
    },
    {
      id: "devops",
      title: { pt: "DevOps & Automação", en: "DevOps & Automation" },
      iconName: "Terminal",
      description: {
        pt: "Infraestrutura como Código, pipelines contínuas e orquestração de containers.",
        en: "Infrastructure as Code, continuous pipelines, and container orchestration."
      },
      skills: [
        {
          name: "Terraform",
          level: { pt: "Sólida Experiência", en: "Solid Experience" },
          context: {
            pt: "Automação declarativa de recursos Azure, modularização de IaC e controle de estado.",
            en: "Declarative Azure resource automation, IaC modularization, and remote state management."
          }
        },
        {
          name: "Ansible",
          level: { pt: "Prática Aplicada", en: "Applied Practice" },
          context: {
            pt: "Gerenciamento de configuração, automação de tarefas operacionais e provisionamento de hosts.",
            en: "Configuration management, operational task automation, and host provisioning."
          }
        },
        {
          name: "CI/CD (GitHub Actions & Git)",
          level: { pt: "Sólida Experiência", en: "Solid Experience" },
          context: {
            pt: "Criação de workflows automatizados para build, teste, segurança e deploy de microsserviços.",
            en: "Building automated workflows for build, test, security analysis, and microservices deploy."
          }
        },
        {
          name: "Docker & Kubernetes",
          level: { pt: "Prática Aplicada", en: "Applied Practice" },
          context: {
            pt: "Containerização de serviços, criação de Dockerfiles eficientes e orquestração de pods/workloads.",
            en: "Containerizing services, crafting multi-stage Dockerfiles, and managing pods/workloads."
          }
        },
        {
          name: "DevSecOps",
          level: { pt: "Conceitos & Prática", en: "Concepts & Practice" },
          context: {
            pt: "Gestão segura de segredos com Key Vault, escaneamento de vulnerabilidades e conformidade.",
            en: "Secure secret management with Key Vault, vulnerability screening, and compliance."
          }
        }
      ]
    },
    {
      id: "platform",
      title: { pt: "Platform Engineering & DevEx", en: "Platform Engineering & DevEx" },
      iconName: "Layers",
      description: {
        pt: "Construção de plataformas internas e empoderamento de times de produto.",
        en: "Building internal developer platforms and empowering product teams."
      },
      skills: [
        {
          name: "Internal Developer Platform (IDP)",
          level: { pt: "Prática em Produção", en: "Production Practice" },
          context: {
            pt: "Evolução contínua da plataforma interna, promovendo padronização e redução do atrito operacional.",
            en: "Continuous evolution of the internal platform, fostering standardization and reducing friction."
          }
        },
        {
          name: "Developer Experience (DevEx)",
          level: { pt: "Foco Estratégico", en: "Strategic Focus" },
          context: {
            pt: "Otimização do fluxo de trabalho do desenvolvedor, encurtando o tempo de onboarding e deploy.",
            en: "Streamlining developer workflows, shortening onboarding time and time-to-production."
          }
        },
        {
          name: "Onboarding de Serviços Cloud",
          level: { pt: "Prática em Produção", en: "Production Practice" },
          context: {
            pt: "Padronização de templates, esteiras e documentações técnicas para adoção de microsserviços.",
            en: "Standardizing templates, pipeline blueprints, and technical documentation for microservices."
          }
        }
      ]
    },
    {
      id: "observability",
      title: { pt: "Observabilidade & Confiabilidade", en: "Observability & SRE" },
      iconName: "Activity",
      description: {
        pt: "Monitoramento de métricas, análise técnica de logs e troubleshooting proativo.",
        en: "Metrics monitoring, technical log analysis, and proactive troubleshooting."
      },
      skills: [
        {
          name: "Grafana & Prometheus",
          level: { pt: "Prática Aplicada", en: "Applied Practice" },
          context: {
            pt: "Visualização de métricas de infraestrutura e serviços, criação de alertas e painéis de telemetria.",
            en: "Infrastructure and service metrics visualization, alerting, and telemetry dashboards."
          }
        },
        {
          name: "Azure Monitor & Logs",
          level: { pt: "Prática em Produção", en: "Production Practice" },
          context: {
            pt: "Acompanhamento de telemetria de recursos cloud, diagnóstico de gargalos e análise de incidentes.",
            en: "Cloud resource telemetry monitoring, bottleneck diagnostics, and incident analysis."
          }
        },
        {
          name: "Troubleshooting Avançado",
          level: { pt: "Sólida Experiência", en: "Solid Experience" },
          context: {
            pt: "Diagnóstico profundo cruzando dados de infraestrutura, aplicação, redes e logs em larga escala.",
            en: "Deep diagnostic correlation connecting infrastructure, application, networking, and logs at scale."
          }
        }
      ]
    },
    {
      id: "governance",
      title: { pt: "Processos, Governança & Ferramentas", en: "Processes, Governance & Tools" },
      iconName: "ShieldCheck",
      description: {
        pt: "Metodologias ágeis, gestão de incidentes corporativos e inteligência de dados.",
        en: "Agile methodologies, enterprise incident management, and data intelligence."
      },
      skills: [
        {
          name: "ITSM & Gestão de Incidentes",
          level: { pt: "Sólida Experiência", en: "Solid Experience" },
          context: {
            pt: "Atuação corporativa estruturada em resolução de incidentes críticos e melhoria contínua de processos.",
            en: "Structured enterprise incident resolution and continuous operational process improvement."
          }
        },
        {
          name: "Scrum & Metodologias Ágeis",
          level: { pt: "Prática Diária", en: "Daily Practice" },
          context: {
            pt: "Colaboração em cerimônias, refinamentos técnicos e planejamento de sprints.",
            en: "Active collaboration in sprints, technical refinement, and delivery cadences."
          }
        },
        {
          name: "Power BI (KPIs & Métricas)",
          level: { pt: "Prática Aplicada", en: "Applied Practice" },
          context: {
            pt: "Desenvolvimento de dashboards estratégicos para monitoramento de SLAs e disponibilidade corporativa.",
            en: "Developing strategic dashboards for monitoring availability KPIs and incident trends."
          }
        },
        {
          name: "VS Code & Git Workflows",
          level: { pt: "Uso Diário", en: "Daily Tooling" },
          context: {
            pt: "Ambiente de desenvolvimento integrado, versionamento colaborativo e code review.",
            en: "Integrated dev environment, branch strategies, collaborative versioning, and code reviews."
          }
        }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "enterprise-idp",
      title: {
        pt: "Internal Developer Platform (IDP) & Onboarding de Microsserviços",
        en: "Internal Developer Platform (IDP) & Microservices Onboarding"
      },
      category: "platform",
      badge: {
        pt: "Experiência em Produção (Getronics / Banco do Brasil)",
        en: "Enterprise Production (Getronics / Banco do Brasil)"
      },
      badgeType: "production",
      shortDescription: {
        pt: "Evolução da plataforma interna para padronização de esteiras CI/CD, governança de infraestrutura Azure e aceleração do ciclo de vida de microsserviços.",
        en: "Evolution of internal developer platform standardizing CI/CD pipelines, Azure infrastructure governance, and accelerating microservices delivery."
      },
      problemSolved: {
        pt: "Reduzir o tempo de onboarding de novas aplicações, diminuir a sobrecarga cognitiva dos times de desenvolvimento e eliminar inconsistências na configuração manual de recursos em nuvem.",
        en: "Reduce developer onboarding overhead, minimize cognitive friction, and eliminate inconsistencies caused by manual cloud infrastructure provisioning."
      },
      architecture: {
        pt: "Arquitetura centrada na experiência do desenvolvedor (DevEx), conectando repositórios padronizados com GitHub Actions, automação de infraestrutura via Terraform & Ansible, hospedagem em Azure e monitoramento automatizado.",
        en: "DevEx-centered architecture connecting standardized application repositories with GitHub Actions, IaC automation via Terraform & Ansible, Azure infrastructure, and automated monitoring."
      },
      myContribution: {
        pt: "Atuação direta na evolução do IDP, criação de pipelines CI/CD automatizadas (GitHub Actions), provisionamento via IaC (Terraform), definição de documentações de plataforma e facilitação técnica do onboarding de times.",
        en: "Direct role in IDP evolution, authoring reusable GitHub Actions CI/CD pipelines, provisioning via Terraform IaC, drafting platform documentation, and onboarding engineering teams."
      },
      technicalDecisions: {
        pt: [
          "Adoção de Infrastructure as Code declarativo (Terraform) para garantir rastreabilidade e idempotência.",
          "Criação de templates reutilizáveis de CI/CD para padronizar validações de qualidade e segurança antes do deploy.",
          "Centralização de métricas e documentações técnicas em repositórios acessíveis a múltiplos esquadrões."
        ],
        en: [
          "Adoption of declarative Infrastructure as Code (Terraform) for auditability and idempotency.",
          "Creation of reusable CI/CD templates to enforce automated code quality and security gates.",
          "Centralization of technical platform documentation to empower self-service across teams."
        ]
      },
      technologies: ["Microsoft Azure", "Internal Developer Platform", "GitHub Actions", "Terraform", "Ansible", "Docker", "ITSM"],
      metricsOrLearnings: {
        pt: [
          "Padronização e previsibilidade no provisionamento de novos microsserviços.",
          "Diminuição de falhas de configuração através de esteiras versionadas.",
          "Experiência real em ambientes de missão crítica de alta exigência de governança bancária."
        ],
        en: [
          "Standardization and predictability in provisioning new microservices.",
          "Reduction in configuration drift via version-controlled pipelines.",
          "Real-world enterprise experience in high-compliance banking infrastructure."
        ]
      },
      diagram: {
        steps: [
          {
            step: "01",
            label: { pt: "Dev Push & Templates", en: "Dev Push & Templates" },
            tech: "Git / IDP Catalog",
            desc: { pt: "Desenvolvedor utiliza template padrão homologado.", en: "Developer scaffolds app from approved IDP template." }
          },
          {
            step: "02",
            label: { pt: "CI Pipeline & Quality", en: "CI Pipeline & Quality" },
            tech: "GitHub Actions",
            desc: { pt: "Build automatizado, lint e validação de segurança.", en: "Automated linting, test suites, and security checks." }
          },
          {
            step: "03",
            label: { pt: "IaC Provisioning", en: "IaC Provisioning" },
            tech: "Terraform / Ansible",
            desc: { pt: "Provisionamento seguro de recursos em Microsoft Azure.", en: "Deterministic resource provisioning in Microsoft Azure." }
          },
          {
            step: "04",
            label: { pt: "Observabilidade Contínua", en: "Continuous Observability" },
            tech: "Azure Monitor / Grafana",
            desc: { pt: "Métricas e logs integrados automaticamente ao catálogo.", en: "Auto-configured metrics and log streams." }
          }
        ]
      }
    },
    {
      id: "azure-iac-foundation",
      title: {
        pt: "Azure Secure Multi-Tier Cloud Foundation com Terraform & Ansible",
        en: "Azure Secure Multi-Tier Cloud Foundation with Terraform & Ansible"
      },
      category: "iac",
      badge: {
        pt: "Laboratório de Engenharia & Boas Práticas",
        en: "Engineering Lab & Best Practices"
      },
      badgeType: "lab",
      shortDescription: {
        pt: "Estruturação completa de infraestrutura em Microsoft Azure via Terraform modular, cobrindo segmentação de redes (VNets/Subnets), segurança com Key Vault, Azure SQL e Azure Firewall.",
        en: "Full infrastructure blueprint on Microsoft Azure using modular Terraform: network segregation (VNets/Subnets), Key Vault secret hygiene, Azure SQL, and Azure Firewall policies."
      },
      problemSolved: {
        pt: "Evitar provisionamentos manuais no portal ('ClickOps') que geram falhas de conformidade, exposição de segredos e inconsistência entre ambientes de teste e produção.",
        en: "Eliminate manual 'ClickOps' provisioning that leads to compliance vulnerabilities, secret leakage, and staging/production drift."
      },
      architecture: {
        pt: "Topologia de rede em camadas (Hub-Spoke / Multi-Subnet) com isolamento entre camada web/aplicação e banco de dados. Integração com Azure Key Vault para gerenciamento de credenciais e Azure Policies para governança.",
        en: "Tiered network topology with strict isolation between compute and database subnets. Integrated Azure Key Vault for credential rotation and Azure Policies for governance."
      },
      myContribution: {
        pt: "Desenvolvimento dos módulos Terraform, definição das regras de Network Security Groups (NSGs), configuração de playbooks Ansible para bootstrap de servidores e documentação da topologia.",
        en: "Authored modular Terraform configurations, mapped NSG rules, engineered Ansible playbooks for system bootstrap, and documented the architecture."
      },
      technicalDecisions: {
        pt: [
          "Módulos independentes para Virtual Network, Banco de Dados e Segurança, facilitando manutenção.",
          "Bloqueio total de portas públicas desnecessárias via NSG e regras de Firewall.",
          "Armazenamento de senhas e certificados exclusivamente no Azure Key Vault com políticas de acesso de menor privilégio."
        ],
        en: [
          "Decoupled modules for Virtual Network, Databases, and Security to enable clean reusability.",
          "Zero public internet exposure for backend tiers via NSG lockdown.",
          "Secrets managed exclusively via Azure Key Vault using least-privilege RBAC."
        ]
      },
      technologies: ["Microsoft Azure", "Terraform", "Ansible", "Virtual Networks", "Azure Key Vault", "Azure SQL", "Azure Firewall", "Azure Policies"],
      metricsOrLearnings: {
        pt: [
          "Infraestrutura 100% reproduzível com um único comando de execução.",
          "Alinhamento rigoroso com os padrões de segurança da certificação AZ-900 e governança corporativa.",
          "Aplicação de boas práticas de tags de custo e controle de recursos."
        ],
        en: [
          "100% reproducible cloud infrastructure via automated declarative IaC.",
          "Strict alignment with AZ-900 security principles and enterprise compliance.",
          "Application of resource tagging conventions for cost tracking and auditability."
        ]
      },
      diagram: {
        steps: [
          {
            step: "01",
            label: { pt: "VNet & Subnet Segregation", en: "VNet & Subnet Segregation" },
            tech: "Azure Virtual Network",
            desc: { pt: "Subnets separadas para front, back e dados protegidos por NSG.", en: "Isolated subnets for frontend, backend, and private database." }
          },
          {
            step: "02",
            label: { pt: "Gestão de Segredos", en: "Secret Management" },
            tech: "Azure Key Vault",
            desc: { pt: "Certificados e chaves criptografadas com acesso RBAC restrito.", en: "Encrypted keys, certificates, and secrets with role-based access." }
          },
          {
            step: "03",
            label: { pt: "Persistência Gerenciada", en: "Managed Data Tier" },
            tech: "Azure SQL Database",
            desc: { pt: "Banco de dados relacional com endpoint privado e backups.", en: "Relational database with private endpoints and auto-backups." }
          },
          {
            step: "04",
            label: { pt: "Governança & Firewall", en: "Governance & Perimeter" },
            tech: "Azure Firewall & Policies",
            desc: { pt: "Inspeção de tráfego perimetral e auditoria contínua de compliance.", en: "Perimeter traffic inspection and compliance guardrails." }
          }
        ]
      }
    },
    {
      id: "microservices-cicd",
      title: {
        pt: "Esteira DevSecOps CI/CD para Microsserviços Conteinerizados",
        en: "DevSecOps CI/CD Pipeline for Containerized Microservices"
      },
      category: "cicd",
      badge: {
        pt: "Automação & Prática DevOps",
        en: "DevOps Automation & Practice"
      },
      badgeType: "lab",
      shortDescription: {
        pt: "Pipeline contínua com GitHub Actions, Docker multi-stage build, linting estático, escaneamento de vulnerabilidades e preparação de manifests Kubernetes.",
        en: "Continuous pipeline using GitHub Actions, multi-stage Docker builds, static code analysis, security scanning, and Kubernetes manifest packaging."
      },
      problemSolved: {
        pt: "Garantir que alterações de código passem por testes e verificações de segurança antes de gerar imagens Docker, reduzindo falhas em runtime e vulnerabilidades em contêineres.",
        en: "Ensure every code commit undergoes automated testing and security screening prior to building container images, mitigating runtime regressions."
      },
      architecture: {
        pt: "Pipeline baseada em GitHub Actions com estágios sequenciais de validação: Checkout -> Linters & Unit Tests -> Docker Build & Push -> Validação de Manifests Kubernetes.",
        en: "GitHub Actions workflow with sequential stages: Checkout -> Linters & Unit Tests -> Docker Build & Push -> Kubernetes manifest validation."
      },
      myContribution: {
        pt: "Estruturação dos workflows YAML do GitHub Actions, otimização de imagens Docker (redução de tamanho via multi-stage) e organização dos manifests declarativos do Kubernetes.",
        en: "Designed GitHub Actions YAML workflows, optimized Docker images using multi-stage builds, and organized declarative Kubernetes deployment manifests."
      },
      technicalDecisions: {
        pt: [
          "Uso de imagens Docker Alpine/distroless para minimizar a superfície de ataque.",
          "Bloqueio da pipeline em caso de falha nos testes ou vulnerabilidades críticas.",
          "Separação clara entre credenciais de build e tokens de deploy utilizando secrets protegidos."
        ],
        en: [
          "Adoption of lean base images to reduce container attack surface.",
          "Hard stop on pipeline upon failing tests or high-severity vulnerabilities.",
          "Strict separation of build tokens and environment secrets."
        ]
      },
      technologies: ["GitHub Actions", "Docker", "Kubernetes", "DevSecOps", "Git", "YAML", "Linux"],
      metricsOrLearnings: {
        pt: [
          "Redução drástica no tempo de compilação com cache de camadas Docker.",
          "Visibilidade clara de status de cada commit para o time de desenvolvimento.",
          "Padronização de manifests prontos para execução em clusters Kubernetes."
        ],
        en: [
          "Optimized build times leveraging Docker layer caching.",
          "Transparent commit-level feedback loop for developer teams.",
          "Standardized declarative manifests ready for Kubernetes deployments."
        ]
      },
      diagram: {
        steps: [
          {
            step: "01",
            label: { pt: "Git Pull Request", en: "Git Pull Request" },
            tech: "Git Branch Strategy",
            desc: { pt: "Trigger automático na abertura do PR.", en: "Automatic trigger upon PR creation." }
          },
          {
            step: "02",
            label: { pt: "Quality & Security Scan", en: "Quality & Security Scan" },
            tech: "GitHub Actions Lint",
            desc: { pt: "Testes unitários e inspeção de código estático.", en: "Unit test suite and static code inspection." }
          },
          {
            step: "03",
            label: { pt: "Multi-Stage Docker Build", en: "Multi-Stage Docker Build" },
            tech: "Docker Engine",
            desc: { pt: "Criação de imagem otimizada e sem lixo de compilação.", en: "Lean container image with minimal footprint." }
          },
          {
            step: "04",
            label: { pt: "K8s Manifest Packaging", en: "K8s Manifest Packaging" },
            tech: "Kubernetes Manifests",
            desc: { pt: "Deployments, Services e ConfigMaps versionados.", en: "Versioned Deployments, Services, and ConfigMaps." }
          }
        ]
      }
    },
    {
      id: "observability-incident-analytics",
      title: {
        pt: "Stack de Observabilidade & Análise de Incidentes Corporativos",
        en: "Enterprise Observability & Incident Analytics Stack"
      },
      category: "observability",
      badge: {
        pt: "Experiência em Produção (Banco do Brasil)",
        en: "Enterprise Production (Banco do Brasil)"
      },
      badgeType: "production",
      shortDescription: {
        pt: "Conexão de telemetria entre infraestrutura, sistemas e logs em larga escala, aliada à construção de dashboards estratégicos em Power BI para monitoramento de disponibilidade e KPIs de chamados.",
        en: "Connecting telemetry across infrastructure, applications, and logs at scale, combined with strategic Power BI availability dashboards and incident KPI tracking."
      },
      problemSolved: {
        pt: "Identificar rapidamente a causa raiz de indisponibilidades em ambientes complexos com milhares de transações simultâneas, evitando impactos prolongados na operação bancária.",
        en: "Rapidly isolate root causes in complex multi-tier banking systems with high transaction volume, preventing prolonged operational downtime."
      },
      architecture: {
        pt: "Integração de ferramentas de observabilidade (Azure Monitor, Prometheus, Grafana) para acompanhamento de saúde técnica dos serviços, combinada com inteligência operacional no Power BI para visibilidade de SLAs e tendências de falhas.",
        en: "Integration of observability platforms (Azure Monitor, Prometheus, Grafana) for technical health tracking, combined with operational intelligence in Power BI for SLA and trend visibility."
      },
      myContribution: {
        pt: "Análise técnica minuciosa de logs e métricas durante incidentes, troubleshooting conectando rede, banco e aplicação, criação de relatórios analíticos de disponibilidade e documentação de melhorias em processos.",
        en: "Detailed log analysis during critical incidents, cross-stack troubleshooting (network, DB, application), designing availability KPI dashboards, and standardizing runbooks."
      },
      technicalDecisions: {
        pt: [
          "Cruzamento de métricas temporais (CPU, memória, latency) com logs de erro de aplicação para acelerar o Mean Time to Resolution (MTTR).",
          "Padronização de categorias de incidentes para alimentar painéis executivos de melhoria contínua.",
          "Desenvolvimento de dashboards no Power BI para acompanhamento de gargalos recorrentes em chamados técnicos."
        ],
        en: [
          "Correlation of time-series metrics with error log timestamps to slash Mean Time to Resolution (MTTR).",
          "Standardized incident categorization feeding continuous process improvement initiatives.",
          "Authored Power BI dashboards tracking recurrent service bottlenecks and ticket SLA compliance."
        ]
      },
      technologies: ["Prometheus", "Grafana", "Azure Monitor", "Power BI", "Log Analytics", "ITSM", "Gestão de Incidentes"],
      metricsOrLearnings: {
        pt: [
          "Redução no tempo de diagnóstico através de rotinas estruturadas de análise de causa raiz.",
          "Maior visibilidade para líderes técnicos sobre os principais causadores de instabilidade.",
          "Domínio prático de sustentação de sistemas críticos sob estritas exigências de disponibilidade."
        ],
        en: [
          "Noticeable diagnostic acceleration via structured root cause analysis workflows.",
          "Actionable visibility for technical leadership on primary instability drivers.",
          "Hands-on expertise supporting mission-critical banking systems with zero tolerance for prolonged outages."
        ]
      },
      diagram: {
        steps: [
          {
            step: "01",
            label: { pt: "Ingestão de Métricas & Logs", en: "Metrics & Logs Ingestion" },
            tech: "Prometheus / Azure Monitor",
            desc: { pt: "Coleta contínua de telemetria dos hosts e microsserviços.", en: "Continuous collection of infrastructure and service signals." }
          },
          {
            step: "02",
            label: { pt: "Visualização em Tempo Real", en: "Real-Time Telemetry" },
            tech: "Grafana Dashboards",
            desc: { pt: "Gráficos de uso, latência, erros 5xx e conexões.", en: "Live charts tracking latency, error rates, and saturation." }
          },
          {
            step: "03",
            label: { pt: "Troubleshooting & Log Analysis", en: "Deep Troubleshooting" },
            tech: "Log Correlation / ITSM",
            desc: { pt: "Isolamento da causa raiz de incidentes críticos.", en: "Cross-system log isolation pinpointing root failure." }
          },
          {
            step: "04",
            label: { pt: "Inteligência Estratégica", en: "Strategic Analytics" },
            tech: "Power BI / SLA Reports",
            desc: { pt: "Acompanhamento executivo de metas e melhoria contínua.", en: "Executive dashboards monitoring availability and KPIs." }
          }
        ]
      }
    },
    {
      id: "aks-gitops-roadmap",
      title: {
        pt: "Cluster Azure AKS com GitOps (ArgoCD) & FinOps (Kubecost) [Roadmap]",
        en: "Azure AKS Cluster with GitOps (ArgoCD) & FinOps (Kubecost) [Roadmap]"
      },
      category: "roadmap",
      badge: {
        pt: "Em Desenvolvimento / Próximo Projeto de Estudo",
        en: "In Active Development / Next Study Milestone"
      },
      badgeType: "roadmap",
      shortDescription: {
        pt: "Projeto pessoal avançado em estruturação para orquestração declarativa de clusters Azure Kubernetes Service (AKS) gerenciados via ArgoCD e monitoramento de custos em nuvem com FinOps.",
        en: "Advanced personal roadmap project structuring declarative Azure Kubernetes Service (AKS) orchestration via ArgoCD and cloud cost intelligence with FinOps."
      },
      problemSolved: {
        pt: "Aprofundar a automação de deployments orientada a GitOps puro (single source of truth) e controle orçamentário granular de recursos de computação conteinerizados.",
        en: "Deepen declarative GitOps deployment patterns (Git as single source of truth) paired with granular container compute cost visibility."
      },
      architecture: {
        pt: "Repositório Git contendo o estado desejado da aplicação sincronizado automaticamente pelo ArgoCD dentro do Azure Kubernetes Service, com exportador de métricas Kubecost e Grafana.",
        en: "Git repository maintaining desired cluster state synced continuously by ArgoCD within Azure AKS, complemented by Kubecost metrics and Grafana alerts."
      },
      myContribution: {
        pt: "Estudo prático da arquitetura, elaboração dos diagramas conceituais, testes de sincronização em ambiente de laboratório e documentação de aprendizados futuros.",
        en: "Architectural design, conceptual flow diagrams, sandbox lab experiments, and continuous study documentation."
      },
      technicalDecisions: {
        pt: [
          "Abordagem 100% transparente: demarcado no portfólio como projeto em desenvolvimento.",
          "Escolha de ArgoCD para sincronização contínua com detecção automática de desvios (drift).",
          "Incorporação de práticas de FinOps para controle financeiro de instâncias sob demanda e spot no Azure."
        ],
        en: [
          "Transparently marked as a roadmap study project demonstrating forward-looking technical initiative.",
          "Selecting ArgoCD for declarative reconciliation and automated drift correction.",
          "Integrating FinOps frameworks for cloud cost governance on Azure."
        ]
      },
      technologies: ["Azure Kubernetes (AKS)", "ArgoCD (GitOps)", "Kubecost", "Prometheus", "Helm", "Terraform", "FinOps"],
      metricsOrLearnings: {
        pt: [
          "Alinhamento com as práticas mais avançadas do ecossistema Cloud Native (CNCF).",
          "Demonstração de iniciativa e evolução contínua em Platform Engineering."
        ],
        en: [
          "Direct alignment with leading Cloud Native Computing Foundation (CNCF) best practices.",
          "Clear demonstration of technical initiative and continuous learning in Platform Engineering."
        ]
      },
      diagram: {
        steps: [
          {
            step: "01",
            label: { pt: "Repositório de Configuração", en: "Config Repository" },
            tech: "Git Repo (Single Source)",
            desc: { pt: "Definições de manifests Kubernetes e Helm charts.", en: "Declarative Helm charts and K8s manifests." }
          },
          {
            step: "02",
            label: { pt: "GitOps Controller", en: "GitOps Controller" },
            tech: "ArgoCD",
            desc: { pt: "Sincronização contínua e correção de drift.", en: "Continuous reconciliation and drift correction." }
          },
          {
            step: "03",
            label: { pt: "Cluster Gerenciado", en: "Managed Cluster" },
            tech: "Azure AKS",
            desc: { pt: "Execução distribuída com autoscaling de nós.", en: "Elastic microservices workload execution." }
          },
          {
            step: "04",
            label: { pt: "FinOps & Telemetria", en: "FinOps & Telemetry" },
            tech: "Kubecost / Grafana",
            desc: { pt: "Análise de custos por namespace e pod.", en: "Granular cost allocation and resource insights." }
          }
        ]
      }
    }
  ] as Project[],

  experiences: [
    {
      role: {
        pt: "Cloud / Platform Engineer",
        en: "Cloud / Platform Engineer"
      },
      company: "GETRONICS",
      client: "Banco do Brasil",
      location: "Brasília, DF",
      period: {
        pt: "03/2025 – 08/2026",
        en: "03/2025 – 08/2026"
      },
      summary: {
        pt: "Atuação direta na evolução de Internal Developer Platform (IDP), promovendo maturidade, governança de infraestrutura e otimização da experiência do desenvolvedor (DevEx) no ecossistema do Banco do Brasil.",
        en: "Direct role in the evolution of an Internal Developer Platform (IDP), driving platform maturity, cloud infrastructure governance, and Developer Experience (DevEx) across Banco do Brasil's technology ecosystem."
      },
      bulletPoints: {
        pt: [
          "Evolução contínua da Internal Developer Platform (IDP), promovendo maturidade técnica, padronização arquitetural e aprimoramento da Developer Experience.",
          "Administração de ambientes em Microsoft Azure e automação de recursos utilizando Infrastructure as Code (Terraform e Ansible).",
          "Criação e refatoração de pipelines CI/CD com GitHub Actions, estruturando automações determinísticas para microsserviços.",
          "Troubleshooting avançado e análise de incidentes complexos, conectando infraestrutura, aplicações, logs distribuídos e métricas.",
          "Definição de métricas de plataforma, elaboração de documentações técnicas de referência e facilitação do onboarding de novos serviços Cloud."
        ],
        en: [
          "Continuous evolution of the Internal Developer Platform (IDP), fostering technical maturity, architecture standards, and enhanced Developer Experience (DevEx).",
          "Microsoft Azure administration and environment automation using Infrastructure as Code (Terraform and Ansible).",
          "Authored and refactored CI/CD pipelines via GitHub Actions, structuring deterministic deployment pipelines for microservices.",
          "Advanced troubleshooting and incident root-cause analysis correlating cloud infrastructure, applications, logs, and telemetry.",
          "Established platform metrics, authored authoritative documentation, and streamlined the onboarding of new Cloud services."
        ]
      },
      technologies: ["Microsoft Azure", "Internal Developer Platform (IDP)", "Terraform", "Ansible", "GitHub Actions", "Docker", "Kubernetes", "Observabilidade", "Troubleshooting"],
      isCurrent: true
    },
    {
      role: {
        pt: "Systems Analyst — Cloud & Processos",
        en: "Systems Analyst — Cloud & Processes"
      },
      company: "BANCO DO BRASIL",
      location: "Brasília, DF",
      period: {
        pt: "09/2024 – 03/2025",
        en: "09/2024 – 03/2025"
      },
      summary: {
        pt: "Resolução de incidentes e sustentação em ambiente bancário de grande escala, com forte ênfase em análise de logs, telemetria de serviços e melhoria contínua de processos operacionais.",
        en: "Incident management and systems reliability in a massive enterprise banking environment, with heavy emphasis on log analytics, service telemetry, and operational process standardization."
      },
      bulletPoints: {
        pt: [
          "Resolução de incidentes em ambiente de grande escala corporativo via análise técnica detalhada de logs, métricas e comportamento de serviços.",
          "Atuação focada na melhoria contínua, padronização e documentação técnica de processos operacionais para ganho de eficiência, confiabilidade e usabilidade.",
          "Colaboração com equipes multidisciplinares de infraestrutura e suporte para mitigação de falhas em sistemas transacionais."
        ],
        en: [
          "Resolution of high-severity incidents in a large-scale banking environment through systematic analysis of server logs, metrics, and application behavior.",
          "Active champion for continuous improvement, standardizing and documenting operational workflows to boost team efficiency and operational reliability.",
          "Close cross-functional collaboration with infrastructure and application teams to minimize customer impact during service disruptions."
        ]
      },
      technologies: ["Análise de Logs", "Métricas de Sistemas", "ITSM", "Gestão de Incidentes", "Melhoria de Processos", "Documentação Técnica"]
    },
    {
      role: {
        pt: "Service Desk Technician",
        en: "Service Desk Technician"
      },
      company: "BANCO DO BRASIL",
      location: "Brasília, DF",
      period: {
        pt: "03/2024 – 09/2024",
        en: "03/2024 – 09/2024"
      },
      summary: {
        pt: "Atendimento técnico a incidentes corporativos complexos e criação de dashboards gerenciais em Power BI para monitoramento de KPIs de disponibilidade e volumetria de chamados.",
        en: "Technical incident diagnosis across corporate hardware, software, networking, and access control, alongside developing Power BI executive availability dashboards."
      },
      bulletPoints: {
        pt: [
          "Diagnóstico e acompanhamento técnico de incidentes corporativos envolvendo hardware, software, redes e acessos até a resolução definitiva.",
          "Desenvolvimento de dashboards estratégicos em Power BI para monitoramento de KPIs de disponibilidade, volumetria e controle de chamados.",
          "Adoção de boas práticas de atendimento e gestão de chamados com foco em cumprimento rigoroso de SLAs contratuais."
        ],
        en: [
          "End-to-end diagnosis and technical resolution of corporate incidents spanning hardware, operating systems, networking, and security access.",
          "Engineered strategic Power BI dashboards tracking availability KPIs, ticket turnaround time, and operational bottlenecks.",
          "Enforced ITIL/ITSM best practices to ensure strict adherence to service level agreements (SLAs)."
        ]
      },
      technologies: ["Power BI", "Diagnóstico de Redes", "Sistemas Operacionais", "Gestão de Acessos", "KPIs de Disponibilidade", "ITSM"]
    }
  ] as ExperienceItem[],

  education: [
    {
      degree: {
        pt: "Pós-Graduação Lato Sensu em Computação em Nuvem",
        en: "Postgraduate Specialization in Cloud Computing (Lato Sensu)"
      },
      institution: "UniCEUB",
      status: {
        pt: "Concluída",
        en: "Completed"
      },
      description: {
        pt: "Formação aprofundada em arquiteturas de nuvem distribuídas, virtualização, infraestrutura como serviço, modelos de segurança e orquestração de serviços em nuvem.",
        en: "Advanced training in distributed cloud architectures, virtualization, IaaS/PaaS models, cloud security frameworks, and container orchestration."
      }
    },
    {
      degree: {
        pt: "Graduação Tecnológica em Gestão de TI",
        en: "Bachelor's / Technologist Degree in Information Technology Management"
      },
      institution: "Faculdade Senac DF",
      status: {
        pt: "Concluída",
        en: "Completed"
      },
      description: {
        pt: "Formação com ênfase em governança de TI, gestão de infraestrutura, engenharia de software, processos ágeis, segurança da informação e gestão de projetos.",
        en: "Comprehensive curriculum covering IT governance, infrastructure management, software lifecycle, agile delivery, information security, and project management."
      }
    }
  ] as EducationItem[],

  certifications: [
    {
      name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      code: "AZ-900",
      status: {
        pt: "Certificação Oficial Conquistada",
        en: "Official Certification Achieved"
      },
      description: {
        pt: "Comprovação de conhecimentos em conceitos de computação em nuvem, serviços centrais do Azure, segurança, privacidade, conformidade e gerenciamento de custos.",
        en: "Validation of foundational knowledge across cloud concepts, core Azure services, security, privacy, compliance, and cloud pricing."
      }
    },
    {
      name: "AWS Educate: Introduction to Cloud 101",
      issuer: "Amazon Web Services (AWS)",
      code: "AWS Educate",
      status: {
        pt: "Concluído",
        en: "Completed"
      },
      description: {
        pt: "Fundamentos de computação em nuvem AWS, serviços de computação elástica, storage, banco de dados e arquitetura segura.",
        en: "Core concepts of AWS cloud infrastructure, elastic compute, object storage, databases, and multi-cloud architectural fundamentals."
      }
    }
  ] as CertificationItem[],

  languages: [
    {
      name: { pt: "Português", en: "Portuguese" },
      level: { pt: "Nativo", en: "Native" },
      note: { pt: "Comunicação nativa e redação técnica corporativa.", en: "Native speaker with polished technical communication." }
    },
    {
      name: { pt: "Inglês", en: "English" },
      level: { pt: "Intermediário / Técnico", en: "Intermediate / Technical" },
      note: {
        pt: "Fluência para leitura de documentações técnicas, escrita de relatórios, interação em canais corporativos e chamados internacionais.",
        en: "Proficient for technical documentation, engineering collaboration, Jira/ticket triage, and international communication."
      }
    }
  ]
};
