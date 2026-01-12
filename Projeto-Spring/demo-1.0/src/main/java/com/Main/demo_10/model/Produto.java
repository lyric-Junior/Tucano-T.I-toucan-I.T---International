package main.com.Main.demo_10.model;

import javax.persistence.*;

@Entity
@Table(name = 'produtos') //Nome da tabela no MySQL
public class Produto {
    @Id
    @GeneratedValue(Strategy = generationType.IDENTITY)
}