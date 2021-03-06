import React, { Component } from 'react';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'

import './InfoBase.css';

class PrfilaktikaPadenij extends Component {

  render() {
    return (

      <Container>
          <Col><h1 style={{ textAlign: 'center', color: "#047B7C" }}>Профилактика падений</h1>
            <hr style={{ width: '60%', marginLeft: '20%', marginRight: '20%', height: '1px', background: '#fff' }} />
          </Col>

        <em>Если вы ухаживаете за больным и ослабленным человеком, помните о риске падений. Чтобы минимизировать их, необходимо правильно оборудовать пространство квартиры, внимательно подбирать обуви и одежду, а также следить за рационом. Вместе с экспертами мы подготовили памятку о самых важных вещах, которые необходимо иметь в виду. </em>
        <h4>Будьте особенно внимательны, если ваш близкий:</h4>
        <ul>
          <li>пожилой и/ или малоподвижный человек;</li>
          <li>принимает определенные виды лекарств, например, со снотворным эффектом;</li>
          <li>страдает от онкологических заболеваний, ослабляющих организм;</li>
          <li>страдает от сердечно-сосудистых и неврологических заболеваний;</li>
          <li>страдает от нарушения зрения;</li>
          <li>переживает постинсультное состояние;</li>
          <li>страдает от деменции;</li>
        </ul>

        <Alert variant={'warning'}>
          <Alert.Heading>Важно!</Alert.Heading>
          <p>
            Чтобы снизить риск падения круглосуточного ухода недостаточно, важно и безопасно обустроенное пространство.
        </p>
        </Alert>

        <h2><strong>Как снизить риски падения </strong></h2>
        <div class="navi"></div>
        <h4><strong>Избавьтесь от лишних предметов</strong></h4>
        <p>В комнате не должно быть неустойчивой или сломанной мебели, разбросанных вещей и предметов, которыми ваш близкий не пользуется. <strong>Уберите преграды</strong>. То, что не опасно для здорового, может стать проблемой для больного. Проследите, чтобы в квартире не было: </p>
        <ul>
          <li>ковров и ковриков (особенно у кровати и в ванной),</li>
          <li>проводов на полу,</li>
          <li>высоких порогов,</li>
          <li>оторванного линолеума,</li>
          <li>поврежденного паркета,</li>
          <li>выбитой плитки,</li>
          <li>и других повреждений пола.</li>
        </ul>

        <Alert variant={'warning'}>
          <Alert.Heading>Важно!</Alert.Heading>
          <p>
          Помните о тормозах:инвалидное кресло, кровать, детская коляска должны стоять на тормозе, когда не используются, чтобы при опирании на них человек не упал.
        </p>
        </Alert>
        <h4><strong>Главное расстояние – вытянутой руки  </strong></h4>
Все необходимое больному человеку – книга, стакан воды, телефон, пульт от телевизора, ходунки и другие необходимые для него предметы, – должно находиться в доступной близости.
        <h4><strong> </strong><strong>Свободу коридорам </strong></h4>
Не расставляйте предметы вдоль стен, особенно в коридорах – у больного должна быть возможность прислониться к стене.
        <h4><strong>Установите поручни  </strong></h4>
Если возможно, оборудуйте стены в комнате и коридоре поручнями и опорными ручками для безопасного перемещения больного по дому.
        <h4><strong>Больше света</strong></h4>
Поставьте у изголовья кровати торшер, настольную лампу, бра так, чтобы человек мог до них дотянуться. В темное время суток может пригодиться ночник.
<h4></h4>
        <Alert variant={'warning'}>
          <Alert.Heading>Важно!</Alert.Heading>
          <p>
            Большинство падений происходит ночью! Оставляйте включенной лампы или ночники.
        </p>
        </Alert>
        <h4><strong>Обустройте ванную комнату</strong></h4>
Постелите на пол и на дно ванны нескользящие коврики, прикрутите ручки или небольшие поручни к стенам возле унитаза и на стене над ванной. Постарайтесь избавиться от порога у входа в комнату.
        <h4><strong>Следите за домашними животными и детьми</strong></h4>
        <ul>
          <li>Кошки и собаки могут путаться под ногами, сбивать с ног и мешать при ходьбе. Позаботьтесь и о комфорте животных, организуйте им перегородки, лежаки, домики.</li>
          <li>Дети тоже могут быть очень активны. Объясните им, как правильно общаться с вашим больным близким.</li>
        </ul>
        <h4><strong>Убирайтесь вовремя</strong></h4>
        <ul>
          <li>Мойте полы, когда ваш близкий не будет ходить по квартире.</li>
          <li>Не используйте полирующие средства для пола.</li>
        </ul>
        <h4><strong>Сделайте </strong><strong>«</strong><strong>умную</strong><strong>»</strong><strong> кровать</strong></h4>
        <ul>
          <li>Если вы используете функциональную кровать, не забывайте поднимать бортик.</li>
          <li>Если у вас обычная кровать, сделайте бортики с помощью подушек и одеял. Но человек не должен чувствовать себя «запертым» в кровати. Если риск падений не очень высок, оставляйте одну часть кровати свободной.</li>
          <li>Опустите кровать как можно ниже к полу.</li>
          <li>Если риск падения с кровати высок, положите матрас рядом с ней.</li>
        </ul>


        <Alert variant={'warning'}>
          <Alert.Heading>Важно!</Alert.Heading>
          <p>
            При подъеме с кровати важно не торопиться и не делать резких движений. Дайте больному посидеть в кровати некоторое время (1-2 минуты), и лишь потом вставать.
        </p>
        </Alert>


        <h2><strong>Одежда </strong></h2>
        <div class="navi"></div>
        <ul>
          <li>Обувь у больного должна быть удобной, без скользкой подошвы, с закрытыми мысками, с низким каблуком и задником. <strong>Не используйте тапочки</strong>! Подбирайте обувь строго по размеру, чтобы она фиксировала стопу.</li>
          <li>Следите за длиной рукавов и штанин.</li>
          <li>Узкая одежда может стеснять движения, широкая – сползать и быть неудобной больному.</li>
          <li>Украшения ваши или больного не должны цепляться за одежду.</li>
        </ul>


        <Alert variant={'warning'}>
          <Alert.Heading>Важно!</Alert.Heading>
          <p>
            Ходунки и трости должны быть по росту и удобны в использовании больным.
        </p>
        </Alert>
        <h2><strong>Нужно </strong></h2>
        <div class="navi"></div>
        <ul>
          <li>Следите за диетой больного. Пища должна быть обогащена кальцием (молочные продукты, брокколи, фасоль, орехи) и витамином D (рыба, рыбий жир, яичный желток, говяжья печень).</li>
          <li>Не забывайте о прогулках на свежем воздухе. Риск падения не должен означать конец активной жизни.</li>
          <li>Следите за физической нагрузкой больного. Необходимо выполнять хотя бы какие-то упражнения для поддержания тонуса мышц.</li>
          <li>Следите за слухом и зрением больного. При любом ухудшении проконсультируйтесь с врачом.</li>
          <li>Следите за давлением, у человека может кружиться голова.</li>
          <li>Записывайте информацию о падениях: когда человек упал и где. Проанализируйте, почему это могло случиться, что ему могло помешать.</li>
          <li>Проверьте, услышите ли вы пациента, если он позовет вас, и как быстро сможете подойти к нему. Будьте готовы прийти на помощь!</li>
        </ul>
        <Alert variant={'warning'}>
          <Alert.Heading>Важно!</Alert.Heading>
          <p>
          Рядом с больным должно быть сигнализирующее устройство, с помощью которого он может вас позвать. Например, колокольчик или беспроводной дверной звонок.
        </p>
        </Alert>

        <h2><strong>Нельзя </strong></h2>
        <div class="navi"></div>
        <ul>
          <li>Ругать человека за то, что он падает. Иначе он будет испытывать страх и вину, станет меньше пить воды, пренебрегать личной гигиеной, чтобы реже вставать с кровати.</li>
          <li>Привязывать больного к кровати. Помните о достоинстве человека!</li>
          <li>Менять расположение мебели и предметов без предупреждения больного.</li>
        </ul>
        <h2><strong>Что делать, если человек упал </strong></h2>
        <div class="navi"></div>
        <ol>
          <li>Не кричите, спокойно подойдите к больному.</li>
          <li>Подойдя, не пытайтесь сразу переместить или поднять его.</li>
          <li>Возможно, от неожиданности или спросонья больной не узнает вас. Спокойно представьтесь, расскажите ему, что произошло и что вы будете делать.</li>
          <li>Если вы подозреваете наличие травм, повреждений, инфаркта или инсульта – вызовите скорую помощь, не двигая человека.</li>
          <li>Если помощь врача не нужна, помогите ему встать. Лучше всего делать это вдвоем. Сходите за родственником или соседями. Спокойно объясните больному, куда и зачем вы идете.</li>
          <li>Если у человека после падения появились ссадины, не представляющие опасности для жизни, обработайте их самостоятельно. Для этого подойдет любой антисептик, например, Хлоргексидин или Мирамистин.</li>
          <li>При необходимости используйте пластырь или бинт. Не забывайте о холодных компрессах на места ушиба для уменьшения боли и отека.</li>
        </ol>

        <Alert variant={'warning'}>
          <Alert.Heading>Важно!</Alert.Heading>
          <p>
            Если человек упал, важно вернуть ему уверенность в его силах! Предложите ему пройти дорогу, на которой он упал, вместе с вами. Проверьте, нет ли на ней препятствий, ненужных вещей, свободен ли проход, есть ли возможность передохнуть и на что-то опереться. Очень важно помочь человеку избавиться от страха упасть снова.
        </p>
        </Alert>



        <h2><strong>Убедитесь, что: </strong></h2>
        <div class="navi"></div>
        <ul>
          <li>Комната больного не загромождена вещами, ему удобно по ней передвигаться.</li>
          <li>Мебель устойчива.</li>
          <li>Пол не поврежден, на нем нет преград (проводов, ковров и т.д.) и высоких порогов.</li>
          <li>Тумбочка стоит от кровати на расстоянии вытянутой руки; на тумбочке есть стакан воды и иные необходимые вещи.</li>
          <li>Ходунки или другие вспомогательные средства передвижения легко доступны больному.</li>
          <li>Кровать, кресло стоят на тормозах.</li>
          <li>Освещение позволяет больному передвигаться по дому ночью.</li>
          <li>В коридоре у человека есть возможность идти вдоль стены.</li>
          <li>Одежда и обувь подобраны правильно.</li>
          <li>Ванная комната и туалет оборудованы держателями.</li>
        </ul>
        <Container  style={{ fontSize: "14px" }}>
Памятку в формате pdf вы можете скачать <a href="https://pro-palliativ.ru/library/profilaktika-padenij" target="_blank" rel="noopener">здесь</a>.

В создании материала участвовали: <em>Лена Андрев</em>, БФ «Старость в радость», РУДН, <em>Ариф Ибрагимов</em>, ГБУЗ «Центр паллиативной помощи ДЗМ», ГБУ «НИИОЗММ ДЗМ».

Материал подготовлен при участии «Мастерской заботы», проекта благотворительного фонда помощи хосписам «Вера», с использованием гранта президента Российской Федерации на развитие гражданского общества, предоставленного Фондом президентских грантов.
       </Container></Container>)


  }
}

export default PrfilaktikaPadenij
