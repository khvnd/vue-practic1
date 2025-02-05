const { createApp } = Vue;


const App1 = {
    data() {
      return {
        newsList: [
            {
                imgClass: 'news-img1',
                imgText: 'Дизайн кухни',
                subtitle: 'Создадим лучший <br> макет перепланировки',
                date: '26 Декабрь, 2022'
              },
              {
                imgClass: 'news-img2',
                imgText: 'Дизайн для жизни',
                subtitle: 'Лучшие интерьерные идеи по низкой цене',
                date: '22 Декабрь, 2022'
              },
              {
                imgClass: 'news-img3',
                imgText: 'Дизайн интерьера',
                subtitle: 'Лучшие интерьерные решения для офисов',
                date: '25 Декабрь, 2022'
              },
              {
                imgClass: 'news-img4',
                imgText: 'Дизайн кухни',
                subtitle: 'Создадим лучший макет перепланировки',
                date: '26 Декабрь,2022 '
              },
              {
                imgClass: 'news-img5',
                imgText: 'Дизайн для жизни',
                subtitle: 'Лучшие интерьерные идеи по низкой цене',
                date: '22 Декабрь,2022 '
              },
              {
                imgClass: 'news-img6',
                imgText: 'Дизайн интерьера',
                subtitle: 'Лучшие интерьерные решения для офисов',
                date: '25 Декабрь,2022 '
              },
              {
                imgClass: 'news-img4',
                imgText: 'Дизайн для жизни',
                subtitle: 'Лучшие интерьерные идеи по низкой цене',
                date: '22 Декабрь, 2022'
              },
              {
                imgClass: 'news-img3',
                imgText: 'Дизайн для жизни',
                subtitle: 'Лучшие интерьерные идеи по низкой цене',
                date: '22 Декабрь, 2022'
              },
              {
                imgClass: 'news-img2',
                imgText: 'Дизайн для жизни',
                subtitle: 'Лучшие интерьерные идеи по низкой цене',
                date: '22 Декабрь, 2022'
              },
              {
                imgClass: 'news-img1',
                imgText: 'Дизайн для жизни',
                subtitle: 'Лучшие интерьерные идеи по низкой цене',
                date: '22 Декабрь, 2022'
              },
              {
                imgClass: 'news-img5',
                imgText: 'Дизайн для жизни',
                subtitle: 'Лучшие интерьерные идеи по низкой цене',
                date: '22 Декабрь, 2022'
              },
              {
                imgClass: 'news-img6',
                imgText: 'Дизайн для жизни',
                subtitle: 'Лучшие интерьерные идеи по низкой цене',
                date: '22 Декабрь, 2022'
              },
              {
                imgClass: 'news-img2',
                imgText: 'Дизайн для жизни',
                subtitle: 'Лучшие интерьерные идеи по низкой цене',
                date: '22 Декабрь, 2022'
              },
              {
                imgClass: 'news-img3',
                imgText: 'Дизайн для жизни',
                subtitle: 'Лучшие интерьерные идеи по низкой цене',
                date: '22 Декабрь, 2022'
              },
              {
                imgClass: 'news-img1',
                imgText: 'Дизайн для жизни',
                subtitle: 'Лучшие интерьерные идеи по низкой цене',
                date: '22 Декабрь, 2022'
              }
        ],
        currentPage: 1,
        itemsPerPage: 6, 
      };
    },
    computed: {
      paginatedNews() {
        let start = (this.currentPage - 1) * this.itemsPerPage;
        let end = start + this.itemsPerPage;
        return this.newsList.slice(start, end);
      },
      totalPages() {
        return Math.ceil(this.newsList.length / this.itemsPerPage);
      }
    },
    methods: {
      goToPage(page) {
        if (page >= 1 && page <= this.totalPages) {
          this.currentPage = page;
        }
      },
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      }
    }
  };
  
  Vue.createApp(App1).mount('#app1');

  

