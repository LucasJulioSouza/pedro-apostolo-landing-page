<?php
/**
 * Tema Paróquia São Pedro Apóstolo - Functions
 */

// Evitar acesso direto
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Configurações do tema
 */
function paroquia_setup() {
    // Suporte para títulos automáticos
    add_theme_support('title-tag');
    
    // Suporte para miniaturas de posts
    add_theme_support('post-thumbnails');
    
    // Suporte para HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    
    // Suporte para feed links
    add_theme_support('automatic-feed-links');
    
    // Definir tamanhos de imagem
    add_image_size('festival-thumb', 400, 300, true);
    add_image_size('news-thumb', 350, 250, true);
}
add_action('after_setup_theme', 'paroquia_setup');

/**
 * Enfileirar estilos e scripts
 */
function paroquia_scripts() {
    // Estilo principal
    wp_enqueue_style('paroquia-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Google Fonts (já incluídas no header.php, mas pode ser movido para cá)
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap', false);
    
    // Script para smooth scroll
    wp_enqueue_script('paroquia-smooth-scroll', get_template_directory_uri() . '/js/smooth-scroll.js', array(), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'paroquia_scripts');

/**
 * Registrar menus
 */
function paroquia_menus() {
    register_nav_menus(array(
        'primary' => __('Menu Principal', 'paroquia'),
        'footer' => __('Menu do Rodapé', 'paroquia'),
    ));
}
add_action('init', 'paroquia_menus');

/**
 * Registrar áreas de widgets
 */
function paroquia_widgets_init() {
    register_sidebar(array(
        'name'          => __('Sidebar Principal', 'paroquia'),
        'id'            => 'sidebar-1',
        'description'   => __('Widgets para a barra lateral principal.', 'paroquia'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
    
    register_sidebar(array(
        'name'          => __('Rodapé - Coluna 1', 'paroquia'),
        'id'            => 'footer-1',
        'description'   => __('Widgets para a primeira coluna do rodapé.', 'paroquia'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ));
    
    register_sidebar(array(
        'name'          => __('Rodapé - Coluna 2', 'paroquia'),
        'id'            => 'footer-2',
        'description'   => __('Widgets para a segunda coluna do rodapé.', 'paroquia'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ));
    
    register_sidebar(array(
        'name'          => __('Rodapé - Coluna 3', 'paroquia'),
        'id'            => 'footer-3',
        'description'   => __('Widgets para a terceira coluna do rodapé.', 'paroquia'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ));
    
    register_sidebar(array(
        'name'          => __('Rodapé - Coluna 4', 'paroquia'),
        'id'            => 'footer-4',
        'description'   => __('Widgets para a quarta coluna do rodapé.', 'paroquia'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="widget-title">',
        'after_title'   => '</h4>',
    ));
}
add_action('widgets_init', 'paroquia_widgets_init');

/**
 * Customizar excerpt
 */
function paroquia_excerpt_length($length) {
    return 20;
}
add_filter('excerpt_length', 'paroquia_excerpt_length', 999);

function paroquia_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'paroquia_excerpt_more');

/**
 * Adicionar classe CSS personalizada para body
 */
function paroquia_body_classes($classes) {
    // Adicionar classe baseada no tipo de página
    if (is_home() || is_front_page()) {
        $classes[] = 'home-page';
    }
    
    return $classes;
}
add_filter('body_class', 'paroquia_body_classes');

/**
 * Personalizar o login do WordPress
 */
function paroquia_login_logo() { ?>
    <style type="text/css">
        #login h1 a, .login h1 a {
            background-image: none;
            background-color: hsl(32, 36%, 50%);
            width: 80px;
            height: 80px;
            border-radius: 50%;
            display: flex !important;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 24px;
            text-decoration: none;
        }
        #login h1 a::after, .login h1 a::after {
            content: "SP";
        }
        .login form {
            border-radius: 8px;
        }
        .login #nav a, .login #backtoblog a {
            color: hsl(32, 36%, 50%) !important;
        }
    </style>
<?php }
add_action('login_enqueue_scripts', 'paroquia_login_logo');

/**
 * Customizer - Opções do tema
 */
function paroquia_customize_register($wp_customize) {
    // Seção de contato
    $wp_customize->add_section('paroquia_contact', array(
        'title'    => __('Informações de Contato', 'paroquia'),
        'priority' => 120,
    ));
    
    // WhatsApp
    $wp_customize->add_setting('paroquia_whatsapp', array(
        'default'           => '5541999999999',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('paroquia_whatsapp', array(
        'label'    => __('Número do WhatsApp', 'paroquia'),
        'section'  => 'paroquia_contact',
        'type'     => 'text',
        'description' => __('Formato: 5541999999999 (código do país + DDD + número)', 'paroquia'),
    ));
    
    // Endereço
    $wp_customize->add_setting('paroquia_address', array(
        'default'           => 'Rua Exemplo, 123 - Centro, Matinhos, PR',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('paroquia_address', array(
        'label'    => __('Endereço', 'paroquia'),
        'section'  => 'paroquia_contact',
        'type'     => 'textarea',
    ));
    
    // Telefone
    $wp_customize->add_setting('paroquia_phone', array(
        'default'           => '(41) 3452-0000',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('paroquia_phone', array(
        'label'    => __('Telefone', 'paroquia'),
        'section'  => 'paroquia_contact',
        'type'     => 'text',
    ));
    
    // Email
    $wp_customize->add_setting('paroquia_email', array(
        'default'           => 'contato@saopedro-matinhos.org.br',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('paroquia_email', array(
        'label'    => __('Email', 'paroquia'),
        'section'  => 'paroquia_contact',
        'type'     => 'email',
    ));
}
add_action('customize_register', 'paroquia_customize_register');

/**
 * Funcções auxiliares
 */

// Obter número do WhatsApp
function get_paroquia_whatsapp() {
    return get_theme_mod('paroquia_whatsapp', '5541999999999');
}

// Obter endereço
function get_paroquia_address() {
    return get_theme_mod('paroquia_address', 'Rua Exemplo, 123 - Centro, Matinhos, PR');
}

// Obter telefone
function get_paroquia_phone() {
    return get_theme_mod('paroquia_phone', '(41) 3452-0000');
}

// Obter email
function get_paroquia_email() {
    return get_theme_mod('paroquia_email', 'contato@saopedro-matinhos.org.br');
}

/**
 * Adicionar suporte para upload de tipos de arquivo adicionais
 */
function paroquia_mime_types($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}
add_filter('upload_mimes', 'paroquia_mime_types');

/**
 * Remover versão do WordPress dos scripts e estilos (segurança)
 */
function paroquia_remove_version_strings($src) {
    global $wp_version;
    parse_str(parse_url($src, PHP_URL_QUERY), $query);
    if (!empty($query['ver']) && $query['ver'] === $wp_version) {
        $src = remove_query_arg('ver', $src);
    }
    return $src;
}
add_filter('script_loader_src', 'paroquia_remove_version_strings');
add_filter('style_loader_src', 'paroquia_remove_version_strings');

/**
 * Otimização para performance
 */
// Remover scripts desnecessários do head
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'rsd_link');

// Limpar head
function paroquia_clean_head() {
    remove_action('wp_head', 'wp_shortlink_wp_head');
    remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10);
}
add_action('init', 'paroquia_clean_head');
?>