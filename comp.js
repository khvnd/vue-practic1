const { createApp } = Vue;

// Компонент  тегов
const TagFilter = {
    props: ["tags", "selectedTag"],
    emits: ["tag-selected"],
    template: `
    <div class="tags-block">
        <h4 class="tags-subtitle">Тэги</h4>
        <div class="tags">
            <button 
                v-for="tag in tags" 
                :key="tag" 
                :class="{ active: selectedTag === tag }"
                @click="$emit('tag-selected', tag)"
            >
                {{ tag }}
            </button>
        </div>
    </div>    
    `
};

// Компонент  статей
const ArticleList = {
    props: ["articles"],
    template: `
        <div class="articles">
            <div v-for="article in articles" :key="article.id" class="article">
                <h3 class="article-title">{{ article.title }}</h3>
                <div :class="['acticle-img', article.img]"></div>
                <p class="article-date">{{ article.date }}</p>
                <p class="article-text">{{ article.content }}</p>
                <div class="quote">
                     <h3 class="quote-title">„</h3>
                     <p class="quote-text">Запомни-а то забудешь</p>               
                </div>
                <div class="second">
                    <h3 class="second-title">{{ article.subtitle }}</h3>
                    <p class="second-text">{{ article.secondContent }}</p>
                </div>
            </div>
        </div>
    `
};

// Главный
createApp({
    components: { TagFilter, ArticleList },
    data() {
        return {
            selectedTag: null,
            tags: ["Кухня", "Спальня", "Ванная", "Архитектура", "Планировка", "Гостиная"],
            articles: [],
            loading: true
        };
    },
    computed: {
        defaultArticle() {
            return this.articles.length > 0 ? this.articles[0] : null;
        },
        filteredArticles() {
            if (!this.selectedTag) return [];
            return this.articles.filter(article => article.tags.includes(this.selectedTag));
        }
    },
    methods: {
        selectTag(tag) {
            this.selectedTag = this.selectedTag === tag ? null : tag;
        },
        async fetchArticles() {//JSON
            try {
                const response = await fetch("articles.json"); 
                this.articles = await response.json();
            } catch (error) {
                console.error("Ошибка загрузки статей:", error);
            } finally {
                this.loading = false;
            }
        }
    },
    mounted() {
        this.fetchArticles(); 
    }
}).mount("#app2");