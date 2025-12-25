-- Script de inicialização do banco de dados
USE u432003722_portaln4m;

-- Tabela de Parceiros
CREATE TABLE IF NOT EXISTS partners (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  logo_url TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabela de Depoimentos
CREATE TABLE IF NOT EXISTS testimonials (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  position VARCHAR(255) NOT NULL,
  company VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  avatar_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Inserir dados iniciais de parceiros
INSERT INTO partners (name, logo_url) VALUES
('TechCorp', 'https://readdy.ai/api/search-image?query=modern%20technology%20company%20logo%20with%20blue%20and%20white%20colors%20minimalist%20design%20corporate%20branding%20professional%20tech%20startup%20identity%20clean%20geometric%20shapes&width=200&height=80&seq=partner1&orientation=landscape'),
('DataSystems', 'https://readdy.ai/api/search-image?query=data%20analytics%20company%20logo%20with%20green%20and%20gray%20colors%20modern%20minimalist%20design%20corporate%20identity%20professional%20tech%20branding%20clean%20lines&width=200&height=80&seq=partner2&orientation=landscape'),
('CloudNet', 'https://readdy.ai/api/search-image?query=cloud%20computing%20company%20logo%20with%20purple%20and%20white%20colors%20futuristic%20design%20corporate%20branding%20professional%20tech%20identity%20minimalist%20geometric&width=200&height=80&seq=partner3&orientation=landscape'),
('InnovateLab', 'https://readdy.ai/api/search-image?query=innovation%20laboratory%20logo%20with%20orange%20and%20black%20colors%20modern%20tech%20design%20corporate%20branding%20professional%20startup%20identity%20clean%20minimalist&width=200&height=80&seq=partner4&orientation=landscape'),
('SecureIT', 'https://readdy.ai/api/search-image?query=cybersecurity%20company%20logo%20with%20red%20and%20dark%20gray%20colors%20shield%20design%20corporate%20branding%20professional%20tech%20identity%20modern%20minimalist&width=200&height=80&seq=partner5&orientation=landscape'),
('DevOps Pro', 'https://readdy.ai/api/search-image?query=devops%20company%20logo%20with%20cyan%20and%20black%20colors%20infinity%20symbol%20design%20corporate%20branding%20professional%20tech%20identity%20modern%20clean&width=200&height=80&seq=partner6&orientation=landscape'),
('AI Solutions', 'https://readdy.ai/api/search-image?query=artificial%20intelligence%20company%20logo%20with%20gradient%20purple%20blue%20colors%20neural%20network%20design%20corporate%20branding%20professional%20tech%20identity%20futuristic&width=200&height=80&seq=partner7&orientation=landscape'),
('BigData Inc', 'https://readdy.ai/api/search-image?query=big%20data%20company%20logo%20with%20yellow%20and%20navy%20blue%20colors%20database%20design%20corporate%20branding%20professional%20tech%20identity%20modern%20geometric&width=200&height=80&seq=partner8&orientation=landscape');

-- Inserir dados iniciais de depoimentos
INSERT INTO testimonials (name, position, company, content, rating, avatar_url) VALUES
('Carlos Silva', 'CTO', 'TechCorp Brasil', 'A N4M transformou completamente nossa infraestrutura. A implementação do DevOps reduziu nosso tempo de deploy em 80% e aumentou significativamente a confiabilidade dos nossos sistemas.', 5, 'https://readdy.ai/api/search-image?query=professional%20business%20man%20portrait%20corporate%20headshot%20confident%20executive%20wearing%20suit%20modern%20office%20background%20natural%20lighting%20professional%20photography&width=100&height=100&seq=avatar1&orientation=squarish'),
('Ana Paula Costa', 'Diretora de TI', 'DataSystems', 'Excelente trabalho na migração dos nossos sistemas legados. A equipe demonstrou alto conhecimento técnico e entregou tudo dentro do prazo. Recomendo fortemente!', 5, 'https://readdy.ai/api/search-image?query=professional%20business%20woman%20portrait%20corporate%20headshot%20confident%20female%20executive%20wearing%20blazer%20modern%20office%20background%20natural%20lighting%20professional%20photography&width=100&height=100&seq=avatar2&orientation=squarish'),
('Roberto Mendes', 'CEO', 'CloudNet Solutions', 'Os dashboards em Power BI que a N4M desenvolveu nos deram uma visão estratégica incrível do negócio. Agora tomamos decisões baseadas em dados reais e em tempo real.', 5, 'https://readdy.ai/api/search-image?query=professional%20business%20man%20portrait%20corporate%20headshot%20mature%20executive%20wearing%20glasses%20and%20suit%20modern%20office%20background%20natural%20lighting%20professional%20photography&width=100&height=100&seq=avatar3&orientation=squarish'),
('Juliana Ferreira', 'Gerente de Projetos', 'InnovateLab', 'A implementação do Grafana e Sentry revolucionou nossa capacidade de monitoramento. Identificamos e resolvemos problemas antes mesmo dos usuários perceberem.', 5, 'https://readdy.ai/api/search-image?query=professional%20business%20woman%20portrait%20corporate%20headshot%20young%20female%20executive%20wearing%20professional%20attire%20modern%20office%20background%20natural%20lighting%20professional%20photography&width=100&height=100&seq=avatar4&orientation=squarish'),
('Marcos Oliveira', 'Diretor de Operações', 'SecureIT', 'Parceria de longo prazo que só traz resultados positivos. A sustentação dos nossos sistemas Java e PHP está impecável. Equipe sempre disponível e proativa.', 5, 'https://readdy.ai/api/search-image?query=professional%20business%20man%20portrait%20corporate%20headshot%20senior%20executive%20wearing%20tie%20and%20suit%20modern%20office%20background%20natural%20lighting%20professional%20photography&width=100&height=100&seq=avatar5&orientation=squarish'),
('Patricia Santos', 'Head de Tecnologia', 'DevOps Pro', 'A arquitetura que a N4M projetou para nosso novo sistema é escalável, segura e moderna. Superou todas as nossas expectativas em termos de performance e confiabilidade.', 5, 'https://readdy.ai/api/search-image?query=professional%20business%20woman%20portrait%20corporate%20headshot%20experienced%20female%20executive%20wearing%20elegant%20blazer%20modern%20office%20background%20natural%20lighting%20professional%20photography&width=100&height=100&seq=avatar6&orientation=squarish');
