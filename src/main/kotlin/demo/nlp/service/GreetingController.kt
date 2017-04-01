package demo.nlp.service

import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.util.concurrent.atomic.AtomicLong

@RestController
class GreetingController {

    object Generator {
        @JvmStatic val id = AtomicLong()
    }

    @RequestMapping("/header")
    fun header(header: String?): Greeting {
        val id = Generator.id.incrementAndGet()
        return Greeting(id, "TODO: LabelService#getLabel(label=$header)")
    }
}