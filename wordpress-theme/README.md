# Tema WordPress - Paróquia São Pedro Apóstolo

Tema moderno e responsivo desenvolvido especificamente para a Paróquia São Pedro Apóstolo de Matinhos, destacando a tradicional Festa de São Pedro.

## 📋 Características

- **Design Moderno**: Interface clean e elegante com paleta de cores em marrom claro e dourado
- **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile
- **SEO Otimizado**: Estrutura semântica e meta tags apropriadas
- **Performance**: CSS otimizado e JavaScript minimalista
- **Acessibilidade**: Seguindo padrões de acessibilidade web

## 🎨 Design System

### Cores Principais
- **Primary**: `hsl(32, 36%, 40%)` - Marrom claro
- **Accent**: `hsl(45, 75%, 55%)` - Dourado
- **Background**: `hsl(0, 0%, 100%)` - Branco
- **Text**: `hsl(222.2, 84%, 4.9%)` - Cinza escuro

### Tipografia
- **Títulos**: Playfair Display (serif) - Para dar um ar clássico
- **Textos**: Inter (sans-serif) - Para legibilidade

### Gradientes
- **Warm**: Linear gradient do marrom claro ao dourado
- **Subtle**: Gradiente sutil para backgrounds de seção

## 📁 Estrutura de Arquivos

```
wordpress-theme/
├── style.css              # Folha de estilos principal (com header do tema)
├── index.php              # Template principal
├── header.php             # Cabeçalho
├── footer.php             # Rodapé
├── functions.php          # Funções do tema
├── js/
│   └── smooth-scroll.js   # Scripts JavaScript
├── assets/               # Pasta para imagens
│   ├── igreja-sao-pedro.jpg
│   ├── festa-1.jpg
│   ├── festa-2.jpg
│   └── festa-3.jpg
└── README.md            # Este arquivo
```

## 🚀 Instalação

1. **Faça o download** dos arquivos do tema
2. **Copie a pasta** `wordpress-theme` para `/wp-content/themes/`
3. **Renomeie** a pasta para `paroquia-sao-pedro`
4. **Acesse** o admin do WordPress → Aparência → Temas
5. **Ative** o tema "Paróquia São Pedro Apóstolo"

## 📸 Adicionando Imagens

Para que o tema funcione completamente, adicione as seguintes imagens na pasta `assets/`:

1. **igreja-sao-pedro.jpg** - Foto principal da igreja (usado na seção "Sobre")
2. **festa-1.jpg** - Foto da procissão marítima
3. **festa-2.jpg** - Foto das barracas da festa
4. **festa-3.jpg** - Foto da missa festiva

### Dimensões Recomendadas:
- **Foto da igreja**: 800x600px
- **Fotos da festa**: 400x300px
- **Formato**: JPG ou PNG
- **Qualidade**: Alta resolução para telas Retina

## ⚙️ Personalização

### 1. Informações de Contato
Acesse **Aparência → Personalizar → Informações de Contato** para editar:
- Número do WhatsApp
- Endereço da paróquia
- Telefone
- Email

### 2. Logo da Paróquia
Para trocar o logo "SP":
1. Edite o arquivo `header.php`
2. Substitua o conteúdo da div `.logo` por uma imagem:
```html
<div class="logo">
    <img src="<?php echo get_template_directory_uri(); ?>/assets/logo.png" alt="Logo">
</div>
```

### 3. Cores Personalizadas
Para alterar as cores, edite as variáveis CSS no arquivo `style.css`:
```css
:root {
  --primary: 32 36% 40%;     /* Cor principal */
  --accent: 45 75% 55%;      /* Cor de destaque */
  /* ... outras variáveis */
}
```

### 4. Google Maps
Para adicionar o mapa real:
1. Obtenha o código embed do Google Maps
2. Substitua o placeholder na seção de localização em `index.php`

## 📱 Funcionalidades

### ✅ Implementadas
- [x] Design responsivo
- [x] Seção hero com versículo bíblico
- [x] Galeria da Festa de São Pedro
- [x] Seção de notícias/eventos
- [x] Informações de contato e localização
- [x] Botão flutuante do WhatsApp
- [x] Formulário de newsletter
- [x] Smooth scroll
- [x] Animações CSS
- [x] SEO básico

### 🔄 Para Implementar
- [ ] Integração com Google Maps real
- [ ] Sistema de galeria dinâmica
- [ ] Integração com Mailchimp
- [ ] Área administrativa para eventos
- [ ] Sistema de múltiplos idiomas
- [ ] Blog/notícias dinâmico

## 🛠️ Desenvolvimento Adicional

### Adicionando Novas Seções
Para adicionar uma nova seção, siga o padrão:

```html
<section class="section">
  <div class="container">
    <div class="section-title">
      <h2>Título da Seção</h2>
      <p>Descrição da seção</p>
    </div>
    
    <!-- Conteúdo da seção -->
    
  </div>
</section>
```

### Criando Novos Templates
Para páginas específicas, crie arquivos seguindo a hierarquia do WordPress:
- `page.php` - Template para páginas
- `single.php` - Template para posts
- `page-eventos.php` - Template específico para página de eventos

### Adicionando Widgets
O tema já possui áreas de widgets registradas em `functions.php`:
- Sidebar principal
- 4 colunas do rodapé

## 📞 Suporte

Para dúvidas sobre o tema ou necessidade de customizações adicionais:
- Email: suporte@exemplo.com
- WhatsApp: (41) 99999-9999

## 📄 Licença

Este tema foi desenvolvido especificamente para a Paróquia São Pedro Apóstolo de Matinhos. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para a comunidade de fé da Paróquia São Pedro Apóstolo**