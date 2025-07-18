    <footer class="site-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>Paróquia São Pedro</h4>
                    <p>
                        A Paróquia São Pedro Apóstolo de Matinhos é um centro de fé e comunhão 
                        no litoral paranaense, servindo nossa comunidade com amor e dedicação.
                    </p>
                    <div style="margin-top: 1rem;">
                        <a href="#" style="margin-right: 1rem; color: hsl(45, 75%, 55%);">Facebook</a>
                        <a href="#" style="margin-right: 1rem; color: hsl(45, 75%, 55%);">Instagram</a>
                        <a href="#" style="color: hsl(45, 75%, 55%);">YouTube</a>
                    </div>
                </div>

                <div class="footer-section">
                    <h4>Horários das Missas</h4>
                    <ul>
                        <li><strong>Segunda a Sexta:</strong> 19h</li>
                        <li><strong>Sábado:</strong> 19h</li>
                        <li><strong>Domingo:</strong> 8h e 19h</li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>Contato</h4>
                    <ul>
                        <li>📍 Rua Exemplo, 123 - Centro</li>
                        <li>🏙️ Matinhos, PR - CEP: 83260-000</li>
                        <li>📞 (41) 3452-0000</li>
                        <li>✉️ contato@saopedro-matinhos.org.br</li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>Newsletter</h4>
                    <p>Receba novidades e informações sobre eventos da paróquia.</p>
                    <form style="margin-top: 1rem;">
                        <input 
                            type="email" 
                            placeholder="Seu e-mail"
                            style="
                                width: 100%; 
                                padding: 0.5rem; 
                                margin-bottom: 0.5rem; 
                                border: 1px solid hsl(var(--border)); 
                                border-radius: 0.375rem;
                                background: white;
                            "
                        >
                        <button type="submit" class="btn btn-primary" style="width: 100%;">
                            Inscrever-se
                        </button>
                    </form>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; <?php echo date('Y'); ?> Paróquia São Pedro Apóstolo de Matinhos. Todos os direitos reservados.</p>
                <p>Desenvolvido com ❤️ para nossa comunidade de fé.</p>
            </div>
        </div>
    </footer>

    <!-- WhatsApp Floating Button -->
    <a 
        href="https://wa.me/5541999999999" 
        target="_blank"
        style="
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background: #25D366;
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-decoration: none;
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
            z-index: 1000;
            transition: var(--transition-smooth);
        "
        onmouseover="this.style.transform='scale(1.1)'"
        onmouseout="this.style.transform='scale(1)'"
    >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.89 3.690z"/>
        </svg>
    </a>

    <?php wp_footer(); ?>
</body>
</html>