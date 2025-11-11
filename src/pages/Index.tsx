import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [loanTerm, setLoanTerm] = useState(12);
  const [depositAmount, setDepositAmount] = useState(500000);
  const [depositTerm, setDepositTerm] = useState(12);
  const [investAmount, setInvestAmount] = useState(100000);
  const [investTerm, setInvestTerm] = useState(24);

  const calculateLoan = () => {
    const rate = 0.15;
    const monthlyRate = rate / 12;
    const payment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / (Math.pow(1 + monthlyRate, loanTerm) - 1);
    return payment;
  };

  const calculateDeposit = () => {
    const rate = 0.08;
    const result = depositAmount * Math.pow(1 + rate / 12, depositTerm);
    return result;
  };

  const calculateInvestment = () => {
    const rate = 0.12;
    const result = investAmount * Math.pow(1 + rate / 12, investTerm);
    return result;
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              FinFlow
            </div>
            <div className="hidden md:flex items-center gap-8">
              {['home', 'services', 'pricing', 'calculator', 'reviews', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'services' && 'Услуги'}
                  {section === 'pricing' && 'Тарифы'}
                  {section === 'calculator' && 'Калькулятор'}
                  {section === 'reviews' && 'Отзывы'}
                  {section === 'about' && 'О нас'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              Начать
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in">
              Финансы нового поколения
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Кредиты, вклады и инвестиции с прозрачными условиями и мгновенным одобрением
            </p>
            <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8"
                onClick={() => scrollToSection('calculator')}
              >
                <Icon name="Calculator" className="mr-2" size={20} />
                Рассчитать
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 border-2 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10"
                onClick={() => scrollToSection('services')}
              >
                Узнать больше
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto">
            {[
              { icon: 'TrendingUp', title: 'Быстрое одобрение', desc: 'Решение за 5 минут', color: 'from-purple-500 to-pink-500' },
              { icon: 'Shield', title: 'Безопасность', desc: 'Защита данных 24/7', color: 'from-blue-500 to-cyan-500' },
              { icon: 'Percent', title: 'Выгодные ставки', desc: 'От 8% годовых', color: 'from-orange-500 to-red-500' }
            ].map((feature, idx) => (
              <Card 
                key={idx} 
                className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/70 backdrop-blur-sm animate-scale-in"
                style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                  <Icon name={feature.icon as any} className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Наши услуги
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Полный спектр финансовых решений</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: 'Banknote', title: 'Кредиты', desc: 'Потребительские кредиты на любые цели с гибкими условиями погашения', color: 'from-purple-500 to-indigo-500' },
              { icon: 'PiggyBank', title: 'Вклады', desc: 'Надежные депозиты с высокой доходностью и страхованием', color: 'from-blue-500 to-cyan-500' },
              { icon: 'LineChart', title: 'Инвестиции', desc: 'Портфельное инвестирование с профессиональным управлением', color: 'from-orange-500 to-pink-500' },
              { icon: 'CreditCard', title: 'Карты', desc: 'Дебетовые и кредитные карты с кэшбэком до 10%', color: 'from-green-500 to-emerald-500' },
              { icon: 'Building2', title: 'Ипотека', desc: 'Ипотечные программы с минимальным первым взносом', color: 'from-red-500 to-rose-500' },
              { icon: 'Briefcase', title: 'Бизнес', desc: 'Финансирование для малого и среднего бизнеса', color: 'from-yellow-500 to-amber-500' }
            ].map((service, idx) => (
              <Card 
                key={idx} 
                className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white group cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon name={service.icon as any} className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Тарифные планы
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Выберите оптимальный вариант</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Стартовый', price: '0', features: ['Базовый кредит до 300к', 'Вклад до 500к', 'Консультации онлайн', 'Мобильное приложение'], popular: false },
              { name: 'Премиум', price: '999', features: ['Кредит до 2 млн', 'Вклад до 5 млн', 'Персональный менеджер', 'VIP-поддержка 24/7', 'Инвестиционный портфель'], popular: true },
              { name: 'Бизнес', price: '2499', features: ['Кредит до 10 млн', 'Депозит без лимита', 'Бизнес-аналитика', 'Корпоративные карты', 'Налоговая оптимизация'], popular: false }
            ].map((plan, idx) => (
              <Card 
                key={idx} 
                className={`p-8 relative ${plan.popular ? 'border-4 border-primary shadow-2xl scale-105' : 'border-0'} hover:shadow-2xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-bold">
                    Популярный
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-600"> ₽/мес</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <Icon name="Check" className="text-green-500 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-secondary' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Выбрать план
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Финансовый калькулятор
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Рассчитайте свои возможности</p>
          
          <Card className="p-8 border-0 shadow-2xl">
            <Tabs defaultValue="loan" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="loan" className="text-base">
                  <Icon name="Banknote" className="mr-2" size={18} />
                  Кредит
                </TabsTrigger>
                <TabsTrigger value="deposit" className="text-base">
                  <Icon name="PiggyBank" className="mr-2" size={18} />
                  Вклад
                </TabsTrigger>
                <TabsTrigger value="invest" className="text-base">
                  <Icon name="TrendingUp" className="mr-2" size={18} />
                  Инвестиции
                </TabsTrigger>
              </TabsList>

              <TabsContent value="loan" className="space-y-6">
                <div>
                  <Label className="text-base mb-2 block">Сумма кредита: {loanAmount.toLocaleString('ru-RU')} ₽</Label>
                  <Slider
                    value={[loanAmount]}
                    onValueChange={(val) => setLoanAmount(val[0])}
                    min={100000}
                    max={5000000}
                    step={50000}
                    className="mb-2"
                  />
                </div>
                <div>
                  <Label className="text-base mb-2 block">Срок: {loanTerm} мес.</Label>
                  <Slider
                    value={[loanTerm]}
                    onValueChange={(val) => setLoanTerm(val[0])}
                    min={6}
                    max={60}
                    step={6}
                  />
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl mt-6">
                  <p className="text-gray-600 mb-2">Ежемесячный платеж:</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {calculateLoan().toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽
                  </p>
                  <p className="text-sm text-gray-500 mt-2">Ставка: 15% годовых</p>
                </div>
              </TabsContent>

              <TabsContent value="deposit" className="space-y-6">
                <div>
                  <Label className="text-base mb-2 block">Сумма вклада: {depositAmount.toLocaleString('ru-RU')} ₽</Label>
                  <Slider
                    value={[depositAmount]}
                    onValueChange={(val) => setDepositAmount(val[0])}
                    min={50000}
                    max={3000000}
                    step={50000}
                  />
                </div>
                <div>
                  <Label className="text-base mb-2 block">Срок: {depositTerm} мес.</Label>
                  <Slider
                    value={[depositTerm]}
                    onValueChange={(val) => setDepositTerm(val[0])}
                    min={3}
                    max={36}
                    step={3}
                  />
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl mt-6">
                  <p className="text-gray-600 mb-2">Сумма к получению:</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                    {calculateDeposit().toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽
                  </p>
                  <p className="text-sm text-gray-500 mt-2">Доход: {(calculateDeposit() - depositAmount).toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽ (8% годовых)</p>
                </div>
              </TabsContent>

              <TabsContent value="invest" className="space-y-6">
                <div>
                  <Label className="text-base mb-2 block">Сумма инвестиций: {investAmount.toLocaleString('ru-RU')} ₽</Label>
                  <Slider
                    value={[investAmount]}
                    onValueChange={(val) => setInvestAmount(val[0])}
                    min={10000}
                    max={2000000}
                    step={10000}
                  />
                </div>
                <div>
                  <Label className="text-base mb-2 block">Срок: {investTerm} мес.</Label>
                  <Slider
                    value={[investTerm]}
                    onValueChange={(val) => setInvestTerm(val[0])}
                    min={6}
                    max={60}
                    step={6}
                  />
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-pink-50 p-6 rounded-xl mt-6">
                  <p className="text-gray-600 mb-2">Прогнозируемая доходность:</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    {calculateInvestment().toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽
                  </p>
                  <p className="text-sm text-gray-500 mt-2">Прибыль: {(calculateInvestment() - investAmount).toLocaleString('ru-RU', { maximumFractionDigits: 0 })} ₽ (12% годовых)</p>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Отзывы клиентов
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Что говорят о нас</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Анна Петрова', role: 'Предприниматель', text: 'Получила кредит на развитие бизнеса за один день. Отличные условия и поддержка!', rating: 5 },
              { name: 'Михаил Иванов', role: 'IT-специалист', text: 'Инвестиционный портфель показывает стабильный рост. Доволен профессионализмом команды.', rating: 5 },
              { name: 'Елена Сидорова', role: 'Дизайнер', text: 'Вклад с отличной ставкой и удобным мобильным приложением. Рекомендую!', rating: 5 }
            ].map((review, idx) => (
              <Card key={idx} className="p-8 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{review.text}"</p>
                <div>
                  <p className="font-bold">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            О компании
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            FinFlow — современная финансовая компания, которая делает финансовые услуги доступными и понятными. 
            Мы используем передовые технологии для того, чтобы вы могли управлять своими финансами легко и безопасно.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { number: '50K+', label: 'Довольных клиентов' },
              { number: '5 лет', label: 'На рынке' },
              { number: '98%', label: 'Одобрений' }
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Свяжитесь с нами
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Готовы помочь вам 24/7</p>
          
          <Card className="p-8 border-0 shadow-2xl">
            <form className="space-y-6">
              <div>
                <Label htmlFor="name">Имя</Label>
                <Input id="name" placeholder="Ваше имя" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="message">Сообщение</Label>
                <Input id="message" placeholder="Чем мы можем помочь?" className="mt-2" />
              </div>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg py-6">
                Отправить заявку
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Icon name="Phone" className="mx-auto mb-2 text-primary" size={24} />
                <p className="font-semibold">Телефон</p>
                <p className="text-sm text-gray-600">8 (800) 555-35-35</p>
              </div>
              <div>
                <Icon name="Mail" className="mx-auto mb-2 text-primary" size={24} />
                <p className="font-semibold">Email</p>
                <p className="text-sm text-gray-600">info@finflow.ru</p>
              </div>
              <div>
                <Icon name="MapPin" className="mx-auto mb-2 text-primary" size={24} />
                <p className="font-semibold">Адрес</p>
                <p className="text-sm text-gray-600">Москва, Тверская 1</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto text-center">
          <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            FinFlow
          </div>
          <p className="text-gray-400 mb-6">Ваш надежный финансовый партнер</p>
          <div className="flex justify-center gap-6 mb-6">
            {['Facebook', 'Twitter', 'Instagram', 'Linkedin'].map((social) => (
              <button key={social} className="hover:text-primary transition-colors">
                <Icon name={social as any} size={24} />
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-500">© 2024 FinFlow. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
