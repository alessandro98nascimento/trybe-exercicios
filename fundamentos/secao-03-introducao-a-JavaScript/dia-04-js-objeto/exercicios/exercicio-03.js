let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  function customerInfo(order) {
    let pessoaDoDelivery = order.order.delivery.deliveryPerson;
    let nomeCliente = order.name;
    let telefoneDoCliente = order.phoneNumber;
    let ruaDoCliente = order.address.street;
    let numeroDaCasa = order.address.number;
    let numeroApartamento = order.address.apartment;

    console.log("Olá, " + pessoaDoDelivery + ", entrega para: " + nomeCliente + ", Telefone: " + telefoneDoCliente + ", " + ruaDoCliente + ", N: " + numeroDaCasa + ", AP: " + numeroApartamento);
  }
  customerInfo(order);

  function orderModifier(order) {
    let nomeCliente = order.name = "Luiz Silva";
    let totalPagar = order.payment.total = "R$ 50,00";
    let bebida = order.order.drinks.coke.type;
    let pizza = Object.keys(order.order.pizza);


    console.log("Olá, " + nomeCliente + ", o valor total do seu pedido de " + pizza + " e " + bebida + " é " + totalPagar);
  }
  
  orderModifier(order);