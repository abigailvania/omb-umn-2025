import React from "react";

import Acara from "../../images/logo-divisi/Ring_Arutala.png"
import Dokumentasi from "../../images/logo-divisi/Ring_Arunika.png"
import Perlengkapan from "../../images/logo-divisi/Ring_Bharana.png"
import Konsumsi from "../../images/logo-divisi/Ring_Kayana.png"
import Desain from "../../images/logo-divisi/Ring_Rekha.png"
import Pr from "../../images/logo-divisi/Ring_Wistara.png"
import Website from "../../images/logo-divisi/Ring_Samhita.png"
import Pic from "../../images/logo-divisi/Ring_Gyana.png"
import Keamanan from "../../images/logo-divisi/Ring_Abhiseva.png"
import Bph from "../../images/logo-divisi/Ring_Naratama.png"
import Medis from "../../images/logo-divisi/Ring_Sadina.png"

const listInterview = [
    {
        divisi: "GYANA",
        nama: "PIC",
        logoDivisi: Pic,
        color: "#FE829C",
        jam: "17.30-22.00",
        jadwal: {
            "Senin, 17 Februari 2025 (C1002)": [
                {nama: "Ardel Toti Febyriyan Tanis", nim: "00000125172"},
                {nama: "Sebastian Benaya", nim: "00000124636"},
                {nama: "Rafella Natasha Djaja", nim: "00000114588"},
                {nama: "Clarissa Thalia Lim", nim: "00000112335"},
                {nama: "Dheryl Christofer Yahya", nim: "00000113470"},
                {nama: "Grace Angelica Benny", nim: "00000112926"},
                {nama: "Raffi Raditya Budiman", nim: "00000117158"},
                {nama: "Marlon Tristan Basrin", nim: "00000113503"},
                {nama: "Cherish Gerraldine Irvannus", nim: "00000106018"},
                {nama: "Dafvin Raditya", nim: "00000133825"},
                {nama: "Syalendra Putra Aditama", nim: "00000124898"},
                {nama: "Anaya Putri Adriani", nim: "00000126898"},
                {nama: "Alexander Briant", nim: "00000099774"},
                
            ],
            "Senin, 17 Februari 2025 (C1001)": [
                {nama: "Aurelia Levina Wiggins", nim: "00000106844"},
                {nama: "Julio Michael Putra Kwary", nim: "00000115692"},
                {nama: "Aditya Gautama Thendy", nim: "00000127938"},
                {nama: "Samantha Olivia Gunawan", nim: "00000095312"},
                {nama: "Helena Patricia Sasmita", nim: "00000113868"},
                {nama: "Grestavia Arabel", nim: "00000106828"},
                {nama: "Keisha Aria Lai", nim: "00000128606"},
                {nama: "Marvin Hariyanto", nim: "00000121938"},
                {nama: "Cahaya Kirania Larasati", nim: "00000112534"},
                {nama: "Rayhan Ferdinand Andyson", nim: "00000133480"},
                {nama: "Angellica Lian", nim: "00000116945"},
                {nama: "Peter Huang", nim: "00000136319"},
                {nama: "Edward Wijaya", nim: "00000095999"},
            ],
            "Selasa, 18 Februari 2025 (D1201)": [
                {nama: "Musa Louis Gerrit Parera", nim: "00000108677"},
                {nama: "Davina Audria Antoni", nim: "00000100708"},
                {nama: "Fayola", nim: "00000113703"},
                {nama: "Davin The", nim: "00000093853"},
                {nama: "Cindy Sintya", nim: "00000105472"},
                {nama: "Felicia Ivana", nim: "00000105587"},
                {nama: "Winda Wifiani", nim: "00000101170"},
                {nama: "Allissa Handini Wilanda", nim: "00000112692"},
                {nama: "Deandra Ferlyn Gunawan", nim: "00000114746"},
                {nama: "Sherlyn Basuki", nim: "00000106199"},
                {nama: "Thomas Aquino Beny", nim: "00000100524"},
                {nama: "Muhammad Sabri", nim: "00000126360"},
                {nama: "Aline Fayola Linardo", nim: "00000115665"},
                {nama: "Yehezkiel Natanael", nim: "00000079871"},
                {nama: "Chintia Calysta", nim: "00000117946"},
            ],
            "Selasa, 18 Februari 2025 (D1202)": [

                {nama: "Maria Miracolosa Hanalaura", nim: "00000108345"},
                {nama: "Angel", nim: "00000117621"},
                {nama: "BK Ditha Olivia", nim: "00000118218"},
                {nama: "Jessica Limitia", nim: "00000105679"},
                {nama: "Chiara Della Porta", nim: "00000108654"},
                {nama: "Candice Odienny Lee", nim: "00000116719"},
                {nama: "Joanna Clarence Isabel", nim: "00000105507"},
                {nama: "Joana Vania Chandra", nim: "00000116180"},
                {nama: "Aaron Laurens Misael Wantania", nim: "00000133269"},
                {nama: "Lady Serenity", nim: "00000116174"},
                {nama: "Sherina Miawati Akasah", nim: "00000114447"},
            ],
            "Rabu, 19 Februari 2025 (D1601)": [
                {nama: "Michelle Liu", nim: "00000108447"},
                {nama: "Harlan Johanes Parjuangan Tambunan", nim: "00000135596"},
                {nama: "Aldrian Putra Pratama", nim: "00000121626"},
                {nama: "Meriel Felicia Sutjipto", nim: "00000113471"},
                {nama: "Thalia Clara Cristiana", nim: "00000122170"},
                {nama: "Caroline Sandra Chen", nim: "00000126916"},
                {nama: "Dani Arifianto", nim: "00000133505"},
                {nama: "Vincent Andresson", nim: "00000110239"},
                {nama: "Claudia Vidya", nim: "00000106784"},
                {nama: "Natan Adi Chandra", nim: "00000079860"},
                {nama: "Aiman Elhamy Ajmal", nim: "00000127334"},
                {nama: "Talitha Syifa Azzahra", nim: "00000133423"},
                {nama: "Eunike Fernanda", nim: "00000113509"},
            ],
            "Rabu, 19 Februari 2025 (D1602)": [
                {nama: "Lysia Callysta Dharmawan", nim: "00000124423"},
                {nama: "Lauren Maidelin", nim: "00000111150"},
                {nama: "Rheznandya Reyhan Abtiansyah", nim: "00000087590"},
                {nama: "Hsu Sin Ji", nim: "00000115980"},
                {nama: "Vania Herdhanty Putri", nim: "00000089432"},
                {nama: "Aurellius Krisna Putra", nim: "00000111108"},
                {nama: "Quinta Revana Hardin", nim: "00000127283"},
                {nama: "Nicholas Edel Tjitrawan", nim: "00000067573"},
                {nama: "Leonardo Dharmawan", nim: "00000128495"},
                {nama: "Sintya Bella Natasia", nim: "00000112280"},
                {nama: "Darren Valentino", nim: "00000108225"},
                {nama: "Evan Yo", nim: "00000068870"},
                {nama: "Jovita Andreas", nim: "00000126862"}
            ],
        }
    },
    {
        divisi: "ARUTALA",
        nama: "Acara",
        logoDivisi: Acara,
        color: "#D6002E",
        jadwal: {

            "Senin, 17 Februari 2025 (C1007)": [
                {nama: "Angelia Monika", nim: "00000120842"},
                {nama: "Isabel Audrey Wijaya", nim: "00000120868"},
                {nama: "Dennis Aaron", nim: "0000079897"},
                {nama: "Celine Lim", nim: "00000111215"},
                {nama: "Julytha David Michella", nim: "0000130611"},
                {nama: "Princess Sabrina Hadiwidjaja", nim: "0000107435"},
                {nama: "Illiona Hartanto", nim: "00000111230"},
                {nama: "Tamara Putri Salwa", nim: "0000130035"},
                {nama: "Marvella Charissa Chuaca", nim: "0000100819"},
                {nama: "Calista Daniela Hartono", nim: "0000076924"},
                {nama: "Ivy Aurelie Grazia", nim: "0000111895"},
                {nama: "Ignatius Pranata Saptosiwi", nim: "0000114009"},
                {nama: "Triosan Molo", nim: "0000136120"},
                {nama: "Dias Prama Wicaksana", nim: "0000116913"},
                {nama: "Muhammad Muttaqie Siahaan", nim: "0000135395"}
            ],
        }
    },
    {
        divisi: "ARUNIKA",
        nama: "Dokumentasi",
        logoDivisi: Dokumentasi,
        color: "#F6740D",
        jam: "17.30-22.00",
        jadwal: {
            "Rabu, 19 Februari 2025 (D1606)": [
                {nama: "Nathaniel Taslim", nim: "00000116440"},
                {nama: "Hana Kristalia Sekar Melati", nim: "00000105508"},
                {nama: "Timotius Harry Mercubuwono", nim: "00000069026"},
                {nama: "Nathanael Axel Sentono", nim: "00000068738"},
                {nama: "Enna Fiesta", nim: "00000068431"},
                {nama: "Revo Alexandre", nim: "00000079025"},
            ],
            "Kamis, 20 Februari 2025 (D1206)": [
                {nama: "Sean Edmund Rukmana", nim: "00000106509"},
                {nama: "Gilbert Valerian Liman", nim: "0000010809"},
                {nama: "Marcello Hannan Elias", nim: "00000106270"},
                {nama: "Bian Constantine Whitey Angel", nim: "00000116372"},
                {nama: "Evi Febriyanti", nim: "00000067370"},
                {nama: "Meysa Event Jong", nim: "00000095376"},
            ],
            "Jumat, 21 Februari 2025 (D1206)": [
                {nama: "Steven Nathanael Surya Kennard", nim: "00000092946"},
                {nama: "Justin Han Theodore", nim: "00000103776"},
                {nama: "Peter Jonathan Tedjakusuma Boyfala", nim: "00000088992"},
                {nama: "Nicholas Bachtiar", nim: "00000087627"},
                {nama: "Farhan Muhammad Naufal", nim: "00000076439"},
                {nama: "Yazzid Fadhillah Milan Wennas", nim: "00000073828"},
                {nama: "Carlyn Deana Abigael", nim: "00000120719"},
            ],
        }
    },
    {
        divisi: "SAMHITA",
        nama: "Website",
        logoDivisi: Website,
        color: "#F7CD1C",
        jam: "17.30-22.00",
        jadwal: {
            "Senin, 17 Februari 2025 (C1004)": [
                {nama: "Dylan Ervian", nim: "00000075730"},
                {nama: "Darryl Cornelius Setiawan", nim: "00000098874"},
                {nama: "Surya Novensky Tinus", nim: "00000108624"},
                {nama: "Kelvin Sutadi", nim: "00000089625"},
                {nama: "Naomi Patricia Leandru", nim: "00000113941"},
            ],
            "Senin, 24 Februari 2025 (D1204)": [
                {nama: "Jeremy Marvel", nim: "00000088987"},
                {nama: "Jennifer Maria Daniella Kastilong", nim: "00000106205"},
                {nama: "Gregorius Gigih Susetyantara", nim: "00000097022"},
                {nama: "Jonathan Prasetyo", nim: "00000077138"},
            ],
        }
    },
    {
        divisi: "WISTARA",
        nama: "Public Relations",
        logoDivisi: Pr,
        color: "#999DA0",
        jam: "17.30-22.00",
        jadwal: {
            "Senin, 17 Februari 2025 (C1012)": [
                
                {nama: "Maria Jovenathania Amaeldiasta Wattimury", nim: "00000119472"},
                {nama: "Paramitha Irgina Sugianto", nim: "00000108235"},
                {nama: "El Fide Glory Nafiri Atmodjo", nim: "00000106801"},

            ],
            "Rabu, 19 Februari 2025 (D1612)": [
                {nama: "Cecilia Margaretha Christie", nim: "00000071675"},
                {nama: "Rafi Anas Naufal", nim: "00000104240"},
                {nama: "Visyell Wong", nim: "00000079318"},
                {nama: "Michelle Clarissa", nim: "00000082733"},
            ],
            "Kamis, 20 Februari 2025 (D1212)": [
                {nama: "Rafi Anas Naufal", nim: "00000104240"},
                {nama: "Rizka Putri Arisanti", nim: "00000115199"},
                {nama: "Siti Maryam", nim: "00000113012"},
                {nama: "Daniel Gouwardi", nim: "00000081820"},
            ],

        }
    },
    {
        divisi: "REKHA",
        nama: "Desain",
        logoDivisi: Desain,
        color: "#4ED2D8",
        jadwal: {
            "Selasa, 18 Februari 2025 (D1205)": [
                {nama: "Padma Natalie Tanarya", nim: "00000105805  |  17.30-17.50"},
                {nama: "Candy Aurielle Surjana", nim: "00000108740  |  17.50-18.10"},
                {nama: "Nadine Antoni", nim: "00000105832  |  18.10-18.30"},
                {nama: "Ivana Novaria", nim: "00000111097  |  18.30-18.50"},
                {nama: "Catherine Olivia", nim: "00000106589  |  18.50-19.10"},
                {nama: "Ivy Aurelie Grazia", nim: "00000111895  |  19.10-19.30"}
            ],

        }
    },
    {
        divisi: "ABHISEVA",
        nama: "Keamanan",
        logoDivisi: Keamanan,
        color: "#000000",
        jam: "17.30-22.00",
        jadwal: {
            "Selasa, 18 Februari 2025 (D1208)": [
                {nama: "Pierre E.S Moningka", nim: "00000128411"},
                {nama: "Yohanna Mariam Walmsley", nim: "00000129380"},
                {nama: "Eugenia Audrey", nim: "00000131734"},
                {nama: "Maria Makarios Wirabekti Damian", nim: "00000094079"},
                {nama: "Alexander Garren Purnama", nim: "00000122533"},
                {nama: "Raffael Valentino Gunawan", nim: "00000091170"},
            ],
            "Selasa, 18 Februari 2025 (D1209)": [
                {nama: "Nadine Indri Gracia Kondo", nim: "00000135943"},
                {nama: "Vijie Annisa Dzatil Izzah", nim: "00000133290"},
                {nama: "Alexander Pambudi Putra Luhur", nim: "00000122513"},
                {nama: "Jennifer Aurelia Wen", nim: "00000137056"},
                {nama: "Hasna Hana Maritza", nim: "00000136305"},
                {nama: "Beatrice Graciela Hadi", nim: "00000112045"},
            ],
            "Kamis, 20 Februari 2025 (D1208)": [
                {nama: "Teresia Tamba", nim: "00000112017"},
                {nama: "Frederick Kristian Putra", nim: "00000116234"},
                {nama: "Jeanette Aprilia Ongah", nim: "00000092425"},
                {nama: "Mochamad Rifky Fauzan", nim: "00000126061"},
                {nama: "Katharie Rianti Meawa Pode", nim: "00000122441"},
                {nama: "Danysah Salma Yusuf", nim: "00000136427"},
                {nama: "Angelica Victoria Cassandra", nim: "00000077048"},
                {nama: "Alula Faiza Aisyah", nim: "00000114075"},
                {nama: "Olivia Ohoiwutun", nim: "00000127453"},
                {nama: "Jervis Dawson Lauw", nim: "00000118132"},
                {nama: "Marchel Halim", nim: "00000092171"}
            ],
        }
    },
    {
        divisi: "BHARANA",
        nama: "Perlengkapan",
        logoDivisi: Perlengkapan,
        color: "#9D09DB",
        jam: "17.30-22.00",
        jadwal: {
            "Rabu, 19 Februari 2025 (D1611)": [
                {nama: "Vallent Liem", nim: "00000097273"},
                {nama: "Muhammad Irfan Rizky Nasution", nim: "00000110639"},
                {nama: "Farrel", nim: "00000099012"},
                {nama: "Louis Jonathan", nim: "00000093996"},
                {nama: "Muhamad Altha Rasjid", nim: "00000136220"},
                {nama: "Maddava Arya Changgasukha", nim: "00000093678"},
            ],
            "Kamis, 20 Februari 2025 (D1211)": [
                {nama: "Benedictus Agsel Prihanto", nim: "00000106221"},
                {nama: "Calvin Khuang", nim: "00000083647"},
                {nama: "Richi Michael Ng", nim: "00000097211"},
                {nama: "Ariel Bravery", nim: "00000095287"},
                {nama: "I Made Ariadne Bayanaka", nim: "00000113156"},
                {nama: "Bisma Putra Aryasatya", nim: "00000088494"},
            ],
            "Kamis, 27 Februari 2025 (D1211)": [
                {nama: "Kevin Thenggano Wijaya", nim: "00000100980"},
                {nama: "Antonius William", nim: "00000127236"},
                {nama: "Muhammad Shanolaf Malik", nim: "00000113244"},
                {nama: "Allissa Handini Wilanda", nim: "00000112692"},
                {nama: "Keane Amadeus Emmanuele Siento", nim: "00000089637"},
            ],
            "Jumat, 28 Februari 2025 (D1611)": [
                {nama: "Gabriel Stanza October", nim: "00000115749"},
                {nama: "Jessica Clairine", nim: "00000121971"},
                {nama: "Sean Rizkiardy Oktosera", nim: "00000107931"},
                {nama: "Christellin Hasugian", nim: "00000126830"},
                {nama: "Yoel Beny Christian", nim: "00000104698"},
                {nama: "Aisyah Maharani Zulia Putri", nim: "00000136325"},
            ],
        }
    },
    {
        divisi: "KAYANA",
        nama: "Konsumsi",
        logoDivisi: Konsumsi,
        color: "#C67F4F",
        jam: "17.30-22.00",
        jadwal: {
            "Senin, 17 Februari 2025 (C1010)": [
                {nama: "Joy Rockniel Abadi", nim: "00000069233"},
                {nama: "Faila Sofia Amanda Putri", nim: "00000118064"},
                {nama: "Nabilah Zahran", nim: "00000087480"},
                {nama: "Arin Amelia Safitri", nim: "00000087616"},
                {nama: "Irpan", nim: "00000113083"},
                {nama: "Darell Timothy Prawita", nim: "00000120805"},
                {nama: "Sultan Malik Ibrahim", nim: "00000133592"},
            ],
            "Rabu, 19 Februari 2025 (D1610)": [
                {nama: "Jessica Audrey", nim: "00000113287"},
                {nama: "Sharon Putri Kiathama", nim: "00000090447"},
                {nama: "Rahel Christine Genovia Philip", nim: "00000117846"},
                {nama: "Rahadina Adisty Paramitha", nim: "00000106427"},
                {nama: "Keiza Namira Adzani", nim: "00000104802"},
                {nama: "Rizka Diah Cahyani", nim: "00000112106"},
                {nama: "Julio Gayus Vidianto", nim: "00000092454"},
                {nama: "Vincentinus Darrel Wilson", nim: "00000125330"},
            ],
            "Selasa, 25 Februari 2025 (D1210)": [
                {nama: "Samantha Felicia L", nim: "00000133983"},
                {nama: "Theofilius Martuado Arilo Rajagukguk", nim: "00000107586"},
                {nama: "Geoffrey Raditya Kawinda", nim: "00000107663"},
                {nama: "Raphael Vittorio Mulyo", nim: "00000105614"},
                {nama: "Muhammad Raffaldy", nim: "00000106377"},
                {nama: "Ghenaya Putri Islamy", nim: "00000136559"},
            ],
            "Rabu, 26 Februari 2025 (D1210)": [
                {nama: "Salma Maliha Khairriya Jannah", nim: "00000115917"},
                {nama: "Felicia Kumalasari", nim: "00000127327"}
            ],


        }
    },
    
]

export default listInterview;