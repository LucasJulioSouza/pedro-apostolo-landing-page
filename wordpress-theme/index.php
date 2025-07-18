<?php get_header(); ?>

<!-- Hero Section -->
<section class="hero-section">
  <div class="container">
    <div class="hero-content fade-in">
      <h1>Paróquia São Pedro Apóstolo</h1>
      <p class="hero-quote">
        "Tu és Pedro, e sobre esta pedra edificarei a minha Igreja."<br>
        <small>- Mateus 16,18</small>
      </p>
      <div class="hero-buttons">
        <a href="#sobre" class="btn btn-primary">Conheça Nossa História</a>
        <a href="#festa" class="btn btn-outline">Festa de São Pedro</a>
      </div>
    </div>
  </div>
</section>

<!-- About Section -->
<section id="sobre" class="section section-subtle">
  <div class="container">
    <div class="section-title">
      <h2>Sobre Nossa Paróquia</h2>
      <p>
        A Paróquia São Pedro Apóstolo de Matinhos é um farol de fé e comunhão no litoral paranaense, 
        servindo com amor e dedicação há décadas nossa querida comunidade litorânea.
      </p>
    </div>

    <div class="grid grid-2 mb-8">
      <div>
        <h3>Nossa História</h3>
        <p>
          Fundada no coração de Matinhos, nossa paróquia tem sido um centro de fé e esperança 
          para pescadores, turistas e moradores locais. Inspirados pelo exemplo de São Pedro, 
          o pescador que se tornou apóstolo, continuamos a "pescar" almas para Cristo.
        </p>
        <p>
          Nossa comunidade se destaca pela tradicional Festa de São Pedro, celebração que 
          une fé, cultura e tradição marítima, atraindo milhares de fiéis e visitantes 
          todos os anos no mês de junho.
        </p>
      </div>
      
      <div>
        <img 
          src="<?php echo get_template_directory_uri(); ?>/assets/igreja-sao-pedro.jpg"
          alt="Igreja São Pedro Apóstolo de Matinhos - Vista aérea da igreja moderna com cruz branca"
          class="card"
          style="width: 100%; height: 300px; object-fit: cover; border-radius: 0.75rem;"
        />
      </div>
    </div>

    <div class="grid grid-4">
      <div class="card">
        <div class="card-content">
          <div class="card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 2H7a1 1 0 00-1 1v18a1 1 0 001 1h10a1 1 0 001-1V3a1 1 0 00-1-1zM8 20V4h8v16H8z"/>
              <path d="M9 6h6v2H9zM9 10h6v2H9zM9 14h6v2H9z"/>
            </svg>
          </div>
          <h4>Missas Regulares</h4>
          <p>Celebrações eucarísticas diárias e aos finais de semana para toda a comunidade.</p>
        </div>
      </div>

      <div class="card">
        <div class="card-content">
          <div class="card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-6h2.5l6 8h2L8 14h2v6H4zm6.5-14c-.83 0-1.5.67-1.5 1.5S9.67 7 10.5 7s1.5-.67 1.5-1.5S11.33 4 10.5 4z"/>
            </svg>
          </div>
          <h4>Grupos Pastorais</h4>
          <p>Diversos grupos de oração, catequese e ação social para todas as idades.</p>
        </div>
      </div>

      <div class="card">
        <div class="card-content">
          <div class="card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
          <h4>Obras Sociais</h4>
          <p>Projetos de assistência às famílias carentes e ações comunitárias.</p>
        </div>
      </div>

      <div class="card">
        <div class="card-content">
          <div class="card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
            </svg>
          </div>
          <h4>Festividades</h4>
          <p>Tradicionais celebrações religiosas, incluindo a famosa Festa de São Pedro.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Festival Section -->
<section id="festa" class="section">
  <div class="container">
    <div class="section-title">
      <h2>Festa de São Pedro 2024</h2>
      <p>
        Nossa tradicional festa em honra a São Pedro aconteceu em junho de 2024, 
        celebrando a fé, tradição e comunhão de nossa paróquia com grande alegria e devoção.
      </p>
    </div>

    <div class="grid grid-3 mb-8">
      <div class="card">
        <img 
          src="<?php echo get_template_directory_uri(); ?>/assets/festa-1.jpg"
          alt="Procissão de São Pedro" 
        />
        <div class="card-content">
          <h4>Procissão Marítima</h4>
          <p>Tradicional procissão com a imagem de São Pedro pelas águas de Matinhos.</p>
        </div>
      </div>

      <div class="card">
        <img 
          src="<?php echo get_template_directory_uri(); ?>/assets/festa-2.jpg"
          alt="Barracas da festa" 
        />
        <div class="card-content">
          <h4>Barracas Típicas</h4>
          <p>Deliciosas comidas típicas e pratos regionais preparados pela comunidade.</p>
        </div>
      </div>

      <div class="card">
        <img 
          src="<?php echo get_template_directory_uri(); ?>/assets/festa-3.jpg"
          alt="Missa festiva" 
        />
        <div class="card-content">
          <h4>Missa Festiva</h4>
          <p>Celebração eucarística especial em honra ao padroeiro São Pedro.</p>
        </div>
      </div>
    </div>

    <div class="text-center">
      <h3>Programação da Festa 2024</h3>
      <div class="grid grid-2 mt-4">
        <div class="card">
          <div class="card-content">
            <h4>28 de Junho</h4>
            <ul style="text-align: left;">
              <li>18h - Abertura oficial da festa</li>
              <li>19h - Missa de abertura</li>
              <li>20h - Apresentação cultural</li>
              <li>21h - Baile com banda local</li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card-content">
            <h4>29 de Junho - Dia de São Pedro</h4>
            <ul style="text-align: left;">
              <li>8h - Missa solene</li>
              <li>16h - Procissão marítima</li>
              <li>18h - Missa festiva</li>
              <li>20h - Queima de fogos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- News Section -->
<section class="section section-subtle">
  <div class="container">
    <div class="section-title">
      <h2>Notícias e Eventos</h2>
      <p>Fique por dentro das últimas novidades e atividades da nossa paróquia.</p>
    </div>

    <div class="grid grid-3">
      <?php
      // Query para últimas 3 postagens
      $recent_posts = wp_get_recent_posts(array(
          'numberposts' => 3,
          'post_status' => 'publish'
      ));
      
      if (!empty($recent_posts)) :
          foreach ($recent_posts as $post) :
      ?>
      <div class="card">
        <?php if (has_post_thumbnail($post['ID'])) : ?>
          <?php echo get_the_post_thumbnail($post['ID'], 'medium'); ?>
        <?php endif; ?>
        <div class="card-content">
          <h4><?php echo esc_html($post['post_title']); ?></h4>
          <p><?php echo wp_trim_words($post['post_content'], 20); ?></p>
          <a href="<?php echo get_permalink($post['ID']); ?>" class="btn btn-outline">Leia mais</a>
        </div>
      </div>
      <?php 
          endforeach;
      else :
      ?>
      <!-- Placeholder cards if no posts -->
      <div class="card">
        <div class="card-content">
          <h4>Novena de São Pedro</h4>
          <p>Participe da novena em preparação para a festa de São Pedro. Todas as noites às 19h.</p>
          <a href="#" class="btn btn-outline">Saiba mais</a>
        </div>
      </div>

      <div class="card">
        <div class="card-content">
          <h4>Catequese 2024</h4>
          <p>Matrículas abertas para a catequese infantil e de adultos. Inscreva-se na secretaria.</p>
          <a href="#" class="btn btn-outline">Saiba mais</a>
        </div>
      </div>

      <div class="card">
        <div class="card-content">
          <h4>Grupo de Oração</h4>
          <p>Encontros todas as quartas-feiras às 20h. Venha fortalecer sua fé conosco.</p>
          <a href="#" class="btn btn-outline">Saiba mais</a>
        </div>
      </div>
      <?php endif; ?>
    </div>
  </div>
</section>

<!-- Location Section -->
<section class="section">
  <div class="container">
    <div class="section-title">
      <h2>Localização e Contato</h2>
      <p>Encontre-nos no coração de Matinhos e participe de nossa comunidade de fé.</p>
    </div>

    <div class="grid grid-2">
      <div>
        <div style="width: 100%; height: 400px; background: #f0f0f0; border-radius: 0.75rem; display: flex; align-items: center; justify-content: center;">
          <p>Mapa do Google Maps será inserido aqui</p>
          <!-- Substitua por iframe do Google Maps -->
        </div>
      </div>

      <div>
        <h3>Informações de Contato</h3>
        <div class="mb-4">
          <h4>Endereço</h4>
          <p>Rua Exemplo, 123<br>Centro - Matinhos, PR<br>CEP: 83260-000</p>
        </div>

        <div class="mb-4">
          <h4>Telefone</h4>
          <p>(41) 3452-0000</p>
        </div>

        <div class="mb-4">
          <h4>Email</h4>
          <p>contato@saopedro-matinhos.org.br</p>
        </div>

        <div class="mb-4">
          <h4>Horários das Missas</h4>
          <ul>
            <li><strong>Segunda a Sexta:</strong> 19h</li>
            <li><strong>Sábado:</strong> 19h</li>
            <li><strong>Domingo:</strong> 8h e 19h</li>
          </ul>
        </div>

        <a href="https://wa.me/5541999999999" class="btn btn-primary" target="_blank">
          Fale Conosco no WhatsApp
        </a>
      </div>
    </div>
  </div>
</section>

<?php get_footer(); ?>